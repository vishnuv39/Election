// Firebase configuration for AP Election TV
const FIREBASE_CONFIG = {
  apiKey: "AIzaSyCN74tHIaIu_3ZWIsOppvmaIW9K81TnRLw",
  authDomain: "elections-55916.firebaseapp.com",
  databaseURL: "https://elections-55916-default-rtdb.firebaseio.com",
  projectId: "elections-55916",
  storageBucket: "elections-55916.firebasestorage.app",
  messagingSenderId: "293034110685",
  appId: "1:293034110685:web:c224a8bb5003c5fa5ef534",
  measurementId: "G-P6XVTXW4K4"
};

const ELECTION_PATH = "ap-election-live";

if (typeof firebase !== "undefined") {
  firebase.initializeApp(FIREBASE_CONFIG);
  window.ELECTION_DB = firebase.database().ref(ELECTION_PATH);
}
