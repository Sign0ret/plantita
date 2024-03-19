import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAw-pBfl9IzusJTnObSihP6iIgDsj0q_5A",
  authDomain: "plantita-8d04d.firebaseapp.com",
  databaseURL: "https://plantita-8d04d-default-rtdb.firebaseio.com",
  projectId: "plantita-8d04d",
  storageBucket: "plantita-8d04d.appspot.com",
  messagingSenderId: "545575669876",
  appId: "1:545575669876:web:35ba52c94ffa820158c121",
  measurementId: "G-FTZECMBCKN"
};

const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export { database }