import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";

import serviceAccount from  "./firebase_creds.json" assert {type: "json"};

initializeApp({
    credential: cert(serviceAccount)
});

const db = getFirestore();

export { db };