import { defineStore } from 'pinia'

  interface User {
    displayNam?: string;
    email: string;
    uid: string;
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
      login(this: any, user: User) {

        this.isAuthenticated = true;
        this.user = user; 
      },
      logout(this: any) {
        this.isAuthenticated = false;
        this.user = null;
      },
    },
  });

