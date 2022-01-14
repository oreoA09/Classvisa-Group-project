function name() {
 let text;
  let person = prompt("Please enter your firstname:", "Harry");
  if (person == null || person == "") {
    text = " ";
  } else {
    text = person;
  }
  document.getElementById("demo").innerHTML = text;
}