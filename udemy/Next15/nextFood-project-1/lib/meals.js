import fs from 'node:fs';
import sql from 'better-sqlite3'
import slugify from "slugify";
import xss from "xss";
import {Buffer} from "buffer";

const db = sql('meals.db');

export const getMeals = async () => {
    await new Promise((resolve) => setTimeout(resolve, 5000));
    return db.prepare('SELECT * FROM meals').all();
}

export const getMeal = ( slug ) => {
    return db.prepare('SELECT * FROM meals WHERE slug=?').get(slug);
}

export const saveMeal = async (meal) => {
    meal.slug = slugify(meal.title, {lower: true});
    meal.instructions = xss(meal.instructions);

    const extension = meal.image.name.split('.').pop(); // расширение файла png, jpeg
    const fileName = `${meal.slug}.${extension}` // делаем название файла
    const stream = fs.createWriteStream(`public/images/${fileName}`); // запись файла в папку
    const bufferedImage = await meal.image.arrayBuffer();

    stream.write(Buffer.from(bufferedImage), (error) => {
        if(error) {
            throw new Error('Error with image')
        }
    })
    meal.image = `/images/${fileName}`

    db.prepare(`    
        INSERT INTO meals
            (title, summary, instructions, creator, creator_email, image, slug)
        VALUES (
         @title,
         @summary,
         @instructions,
         @creator,
         @creator_email,
         @image,
         @slug)  
    `).run(meal)
}
