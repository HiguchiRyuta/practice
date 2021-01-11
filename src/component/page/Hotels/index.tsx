import React from 'react'
import PageTitle from '../../atom/PageTitle';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDhv58MYUehZLa1b3dSO6aKRzrXJ30qTlI",
  authDomain: "mytravel-942aa.firebaseapp.com",
  projectId: "mytravel-942aa",
  storageBucket: "mytravel-942aa.appspot.com",
  messagingSenderId: "672246439725",
  appId: "1:672246439725:web:4d05d37644cb16d5ec7da4",
  measurementId: "G-KMKD1HTMZY"
};

firebase.default.initializeApp(firebaseConfig);
const About = React.memo(() =>{
  console.log(firebase.default.firestore().collection('users').doc())
  return(
  <>
  <PageTitle title='About'/>
  </>
)
})

export default About;