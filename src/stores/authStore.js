import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc } from "firebase/firestore";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: true,
  }),
  actions: {
    async fetchUser() {
        return new Promise((resolve, reject) => {
          const auth = getAuth();
          const db = getFirestore();
      
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              try {
                const docSnap = await getDoc(doc(db, "users", user.uid));
                this.user = docSnap.exists() ? docSnap.data() : null;
                resolve(this.user);
              } catch (error) {
                reject(error);
              }
            } else {
              this.user = null;
              resolve(null);
            }
            this.loading = false;
          });
        });
      },
      
    async logout() {
      const auth = getAuth();
      await signOut(auth);
      this.user = null;
    },
  },
});
