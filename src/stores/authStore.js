import { defineStore } from "pinia";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
    loading: true,
  }),
  actions: {
    logout() {
        const auth = getAuth();
        return signOut(auth).then(() => {
          this.user = null;
        });
    },
    // Sets up a persistent listener to fetch user data
    fetchUser() {
      const auth = getAuth();
      const db = getFirestore();
      
      this.loading = true;
      const unsubscribe = onAuthStateChanged(auth, async (user) => {
        if (user) {
          try {
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);
            // Update store with Firestore data (if available)
            this.user = docSnap.exists() ? docSnap.data() : { email: user.email, uid: user.uid };
          } catch (error) {
            console.error("Error fetching user:", error);
            this.user = { email: user.email, uid: user.uid };
          }
        } else {
          this.user = null;
        }
        this.loading = false;
      });

      return unsubscribe;
    },

    // Saves user data in Firestore and updates the store's user state.
    saveUserData(uid, userData) {
      const db = getFirestore();
      // Write user data to Firestore (users collection)
      return setDoc(doc(db, "users", uid), userData)
        .then(() => {
          // After saving, update the store state with the new user data
          this.user = userData;
        })
        .catch((error) => {
          console.error("Error saving user data:", error);
          throw error;
        });
    },

  
  },
});
