// ============ Comments Section Firebase ===============
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyDGCbnuOnZmhrGH7tr32ZvOCY5rXRY06Ds",
  authDomain: "stolen-plays.firebaseapp.com",
  databaseURL: "https://stolen-plays.firebaseio.com",
  projectId: "stolen-plays",
  storageBucket: "stolen-plays.appspot.com",
  messagingSenderId: "400505597875",
  appId: "1:400505597875:web:fd960beb1d0668192ae5c6",
  measurementId: "G-0D19F3M0SD"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

var db = firebase.database().ref();
var formReview;
var title = document.title;

function check(pageNum) {
  if (pageNum == title) {
    // KYRA
    if (pageNum == "50 Stolen Plays - 2010") {
      formReview = db.child("2010_com");
    }
    if (pageNum == "50 Stolen Plays - 2 August 2020") {
      formReview = db.child("2_8_2020_com");
    }
    if (pageNum == "50 Stolen Plays - 13 September 2016") {
      formReview = db.child("13_9_2016_com");
    }
  } else {
    console.log("wrong comment section!");
  }
}

check("50 Stolen Plays - 2010");
check("50 Stolen Plays - 2 August 2020");
check("50 Stolen Plays - 13 September 2016");

document.getElementById("reviewForm").addEventListener("submit", formSubmit);
//this would change second parameter to review

//write data
function formSubmit(e) {
  e.preventDefault();
  //gets each variable from DOM
  let name = document.querySelector("#name").value;
  let comment = document.querySelector("#comment").value;

  sendMessage(name, comment);
  // readData();
  // shows alert after submission
  document.querySelector(".alert").style.display = "block";

  //after submission alert pops up, hides alert after 7 secs
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 7000);

  document.getElementById("reviewForm").reset();
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
formReview.on("child_added", (snap) => {
  var theName = snap.child("name").val();
  var theComment = snap.child("comment").val();

  var table = document.getElementById("table");
  tableChild = document.createElement("tr");
  tableChild.innerHTML = "<td>" + theName + "</td><td>" + theComment + "</td>";
  table.appendChild(tableChild);
});

formReview.on("child_changed", (snap) => {
  var theName = snap.child("name").val();
  var theComment = snap.child("comment").val();

  var table = document.getElementById("table");
  tableChild = document.createElement("tr");
  tableChild.innerHTML = "<td>" + theName + "</td><td>" + theComment + "</td>";
  table.appendChild(tableChild);
});
//}
