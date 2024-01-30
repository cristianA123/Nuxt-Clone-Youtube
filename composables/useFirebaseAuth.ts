
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut   } from "firebase/auth";

export const useFirebaseAuth = () => {
    const { $auth } = useNuxtApp();
 
    const register = async (email: string, password: string) => {
        try {
            const userCredential = await createUserWithEmailAndPassword(
                $auth,
                email,
                password
            );
    
            const user = userCredential.user;
            console.log(user);

        } catch (error) {
            // const errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, errorMessage);
            console.log(error)
        }
    }

    const login = async (email: string, password: string) => {
        try {
            const userCredential = await signInWithEmailAndPassword (
                $auth,
                email,
                password
            );
    
            const user = userCredential.user;
            console.log(user);
            return {
                success: true,
                user: {
                    uid: user.uid,
                    email: user.email,
                    displayName: user.displayName
                }
            }

        } catch (error) {
            console.log(error)
            return {
                success: false,
                msg: 'Invalid credentials'
            }
        }
    }

    const logout = async () => {
        await signOut($auth)
        await navigateTo('/login2')
    }

    return {
        register,
        login,
        logout
    }

}