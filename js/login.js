function validateform() {
  var name = document.myform.name.value;
  var password = document.myform.password.value;

  if (name == "lajoon" && password == "lajoon123") {
    window.open(
      "http://127.0.0.1:5500/GROCERY%20SSTORE/freshshop-master/NEW%20PROJECT/index.html"
    );
    return false;
  } else {
    alert(" Usernamr or Password incorrecg.");
    return false;
  }
}
