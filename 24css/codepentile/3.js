var button1 = document.getElementById("likes"),
  count1 = 0;
button1.onclick = function () {
  count1 += 1;
  button1.innerHTML = "❤️" + " " + count1;
};

var button2 = document.getElementById("comments"),
  count2 = 0;
button2.onclick = function () {
  count2 += 1;
  button2.innerHTML = "Comments" + " " + count2;
};
