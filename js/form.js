

const firebaseConfig = {
  apiKey: "AIzaSyBk5zW0bRkF9wnr6QM_oUqPcD1o8GEIRdg",
  authDomain: "portfolio-eee07.firebaseapp.com",
  databaseURL: "https://portfolio-eee07-default-rtdb.firebaseio.com",
  projectId: "portfolio-eee07",
  storageBucket: "portfolio-eee07.appspot.com",
  messagingSenderId: "881334825943",
  appId: "1:881334825943:web:690d7d9ea684fdc0c01192",
  measurementId: "G-H4B7ZJ95PV"
};
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var subject = getElementVal("subject");
    var email = getElementVal("email");
    var message = getElementVal("message");
  
    saveMessages(name, subject, email, message);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, subject, email, message) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      subject: subject,
      email: email,
      message: message,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };