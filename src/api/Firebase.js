import firebase from 'firebase';

// Initialize Firebase
var config = {
    
    apiKey: "AIzaSyCy8KxOuamWEt3eyWSdUKnzX7hVE-ud-CQ",
    authDomain: "blog-e6d95.firebaseapp.com",
    databaseURL: "https://blog-e6d95.firebaseio.com",
    projectId: "blog-e6d95",
    storageBucket: "blog-e6d95.appspot.com",
    messagingSenderId: "433052460027",
    appId: "1:433052460027:web:9e99a4efd24d203223e15e"
};

firebase.initializeApp(config);

const database = firebase.database();

export default database;