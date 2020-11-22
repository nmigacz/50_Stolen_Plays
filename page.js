// ============ Comments Section Firebase ===============
// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDTi8tJwxvR5qgM_omfcHGLQ6CnKcK8vQ8",
  authDomain: "stolen-plays-9c872.firebaseapp.com",
  databaseURL: "https://stolen-plays-9c872.firebaseio.com",
  projectId: "stolen-plays-9c872",
  storageBucket: "stolen-plays-9c872.appspot.com",
  messagingSenderId: "494685114527",
  appId: "1:494685114527:web:955de5e38feaede2b212aa",
  measurementId: "G-TZD5LLFB85"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.database().ref();
var formReview;
var title = document.title;

function check(pageNum) {
  if (pageNum == title) {
    if (pageNum == '50 Stolen Plays - 2010') {
      formReview = db.child('2010_com');
    }
    if (pageNum == '50 Stolen Plays - 2 August 2020') {
      formReview = db.child('2_8_2020_com');
    }
    if (pageNum == '50 Stolen Plays - 13 September 2016') {
      formReview = db.child('13_9_2016_com');
    }
  } else {
    console.log('wrong comment section!');
  }
}

check('50 Stolen Plays - 2010');
check('50 Stolen Plays - 2 August 2020');
check('50 Stolen Plays - 13 September 2016');

//const formReview = firebase.database().ref('comments'); // creates and names collection of reviews of particular class

document.getElementById('reviewForm').addEventListener('submit', formSubmit);
//this would change second parameter to review

//write data
function formSubmit(e) {
  e.preventDefault();
  //gets each variable from DOM
  let name = document.querySelector('#name').value;
  let comment = document.querySelector('#comment').value;

  sendMessage(name, comment);
  // readData();

  document.getElementById('reviewForm').reset();
}

function sendMessage(name, comment) {
  let newFormReview = formReview.push();
  newFormReview.set({
    name: name,
    comment: comment
  });
}

//function readData(){
// reads data
formReview.on('child_added', (snap) => {
  var theName = snap.child("name").val();
  var theComment = snap.child("comment").val();

  var table = document.getElementById('table');
  tableChild = document.createElement('tr');
  tableChild.innerHTML = "<td>" + "<h5>" + theName  + ":" + "</h5>" + "<p>" + theComment + "</p>" + "</td>";
  table.appendChild(tableChild);
});

formReview.on('child_changed', (snap) => {
  var theName = snap.child("name").val();
  var theComment = snap.child("comment").val();

  var table = document.getElementById('table');
  tableChild = document.createElement('tr');
  tableChild.innerHTML = "<td>" + theName + "</td><td>" + theComment + "</td>";
  table.appendChild(tableChild);
});
//}