var firebaseConfig = {
    apiKey: "AIzaSyBe9u_DbVV5RdjNzscqw5htegsPApCj2PE",
    authDomain: "wedevelop-fe38f.firebaseapp.com",
    databaseURL: "https://wedevelop-fe38f.firebaseio.com",
    projectId: "wedevelop-fe38f",
    storageBucket: "wedevelop-fe38f.appspot.com",
    messagingSenderId: "666191965721",
    appId: "1:666191965721:web:fbfc02eab323249d"
};

firebase.initializeApp(firebaseConfig);
const db=firebase.firestore();
db.settings({ timestampsInSnapshots: true });
