import Firebase from 'firebase';

var firebaseConfig = {
  apiKey: 'AIzaSyBl_ah_DQhOHYuRzMI8lurzObPECsJYqRs',
  authDomain: 'pup-quiz.firebaseapp.com',
  databaseURL: 'https://pup-quiz-default-rtdb.firebaseio.com',
  projectId: 'pup-quiz',
  storageBucket: 'pup-quiz.appspot.com',
  messagingSenderId: '188181812468',
  appId: '1:188181812468:web:6579ee18dee38c64c43aa1',
};

const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
