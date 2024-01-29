import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

export default defineNuxtPlugin(nuxtApp => {

    const runtimeConfig = useRuntimeConfig()

    const firebaseConfig = {
        apiKey: runtimeConfig.public.apiKey,
        authDomain: runtimeConfig.public.authDomain,
        projectId: runtimeConfig.public.projectId,
        storageBucket: runtimeConfig.public.storageBucket,
        messagingSenderId: runtimeConfig.public.messagingSenderId,
        appId: runtimeConfig.public.appId
    };

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    return {
        provide: {
            auth
        },
    };
});