import db from "@/lib/db";
import {prepare} from "better-sqlite3/lib/methods/wrappers";

export const createUser =  (email, password) => {
    const result =  db
        .prepare('INSERT INTO users (email, password)  VALUES (?, ?)')
        .run(email, password);
    return result.lastInsertRowid;
}

export const getUserByEmail = (email) => {
    const user = db
        .prepare('SELECT * FROM users WHERE email = ?')
        .get(email);
    return user;
}