'use server';

import {createUser, getUserByEmail} from "@/lib/user";
import {redirect} from "next/navigation";
import {hashUserPassword, verifyPassword} from "@/lib/hashs";
import {creacteAuthSession, destroySession} from "@/lib/ auth";

export const signup = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');
    
    let errors = {};
    
    if (!email.includes('@')) {
        errors.email = 'Please enter a valid email address.';
    }
    
    if (password.trim().length < 8) {
        errors.password = 'Password must be at least 8 characters long.';
    }
    if (Object.keys(errors).length > 0) {
        return {
             errors
        }
    }

    const hashedPassword = hashUserPassword(password);

    try {
       const id = createUser(email, hashedPassword);
       await creacteAuthSession(id)
       redirect('/training');
    } catch (error) {
        if (error.code === 'SQLITE_CONSTRAINT_UNIQUE') {
            return {
                errors: {
                    email: 'A user with this email already exists.'
                }
            }
        }
        throw error;
    }
}

export const login = async (prevState, formData) => {
    const email = formData.get('email');
    const password = formData.get('password');

    const existingUser = getUserByEmail(email);

    if (!existingUser) {
        return {
            errors: {
                email: 'No user found with this email address.'
            }
        }
    }
    const hashedPassword = verifyPassword(existingUser.password, password);
    if (!hashedPassword) {
        return {
            errors: {
                password: 'Incorrect password.'
            }
        }
    }

    await creacteAuthSession(existingUser.id);
    redirect('/training');
}

export const auth = (mode, prevState, formData) => {
    if (mode === 'login') {
        return login(prevState, formData)
    }
    if (mode === 'signup') {
        return signup(prevState, formData)
    }
}

export const logout = async () => {
    console.log('Logging out user...');
    await destroySession();
    redirect('/');
}