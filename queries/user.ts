import { User } from '@/model/user';

interface UserProps {
    name: string;
    email: string;
    password: string;
}

export async function createUser(userData: UserProps) {
    try {
        // Make sure to use 'userData' here, not 'user' again
        const newUser = await User.create(userData);
        return newUser;
    } catch (e) {
        if (e instanceof Error) {
            // Handle known errors
            throw new Error(e.message);
        } else {
            // Catch any other errors (e.g. non-Error objects)
            throw new Error('An unknown error occurred while creating the user.');
        }
    }
}


export async function getUserByEmail(email:string){
    const user = await User.findOne({email:email}).select("-password").lean();
    return user;
}