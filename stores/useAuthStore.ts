import { defineStore } from 'pinia'

interface User {
    username: string;
  }
  
  interface AuthState {
    isAuthenticated: boolean;
    user: User | null;
  }
  
  export const useAuthStore = defineStore('auth', {
    state: (): AuthState => ({
      isAuthenticated: false,
      user: null,
    }),
    actions: {
      login(this: any, pin: string) {
        console.log(pin)
        this.isAuthenticated = true;
        this.user = { username: 'Cristian' }; 
      },
      logout(this: any) {
        this.isAuthenticated = false;
        this.user = null;
      },
    },
  });

