import { initializeApp } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.16.0/firebase-auth.js";
import {
  getFirestore,
  enableIndexedDbPersistence
} from "https://www.gstatic.com/firebasejs/12.16.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDfGLNhCwLr_gAxV9LRz0Ppm7Feb-iZYt4",
  authDomain: "studio-1737295542-906cd.firebaseapp.com",
  databaseURL: "https://studio-1737295542-906cd-default-rtdb.firebaseio.com",
  projectId: "studio-1737295542-906cd",
  storageBucket: "studio-1737295542-906cd.firebasestorage.app",
  messagingSenderId: "986728437294",
  appId: "1:986728437294:web:56e4bbd5ce2ff50448b1bf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);

// تفعيل التخزين المؤقت (Offline Persistence)
enableIndexedDbPersistence(db)
  .then(() => {
    console.log("Offline persistence enabled");
  })
  .catch((err) => {
    console.error("Persistence error:", err);
  });
