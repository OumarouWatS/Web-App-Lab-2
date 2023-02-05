var attempt = "";
function display(x) {
  var word = "EXTRAORDINARY";
  if (x == "14") {
    letters = document.getElementsByName("1");
    for (var i = 0; i < letters.length; i++)
      letters[i].disabled = false;
    document.getElementById("15").innerHTML += attempt + " ";
    attempt = "";
  } else if (x == "16") {
    document.getElementById("15").innerHTML = " ";
  } else {
    attempt += word[x - 1];
    if (x != "14" && x != "16") {
      document.getElementById(x).disabled = true;
    }
  }
}
