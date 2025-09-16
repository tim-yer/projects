'use server';

import {storePost, updatePostLikeStatus} from "@/lib/posts";
import {redirect} from "next/navigation";
import {uploadImage} from "@/lib/cloudinary";
import {revalidatePath} from "next/cache";

export const createPost = async (prevState, formData) => {
    const title = formData.get('title');
    const image = formData.get('image');
    const content = formData.get('content');

    let errors = [];
    if (!title || title.trim().length === 0) {
        errors.push('Title is required.');
    }
    if (!content || content.trim().length === 0) {
        errors.push('Content is required.');
    }
    if (!image || image.size === 0) {
        errors.push('Image is required.');
    }
    if (errors.length > 0) {
        return { errors } ;
    }

    let imageUrl;
    console.log(errors)
    try {
        imageUrl = await uploadImage(image);
    } catch (error) {
        throw new Error('Image upload failed. Please try again.');

    }


    await storePost({
        imageUrl: imageUrl,
        title: title,
        content: content,
        userId: 1
    });

    redirect('/feed')
    revalidatePath('/', 'layout')
}

export const togglePostLike = async (postId) => {
    await updatePostLikeStatus(postId, 2)
    revalidatePath('/', 'layout')
}

