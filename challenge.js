const counter = document.getElementById("counter"),
      up = document.getElementById("+"),
      down = document.getElementById("-"),
      commentForm = document.getElementById("comment-form"),
      controlButton = document.getElementById("pause"),
      buttons = document.querySelectorAll("body > button:not(#pause)"),likeButton = document.getElementById('<3'),
      likeCount = {};

document.addEventListener("DOMContentLoaded", () => {
  up.addEventListener("click", addValue);
  down.addEventListener("click", subtractValue);
  commentForm.addEventListener("submit", addComment);
  controlButton.addEventListener("click", runApp);
  likeButton.addEventListener("click", addLike);
  runCounter();
});

function addValue(event) {
  counter.innerText = parseInt(counter.innerText)+1;
}

function subtractValue(event) {
  counter.innerText = parseInt(counter.innerText)-1;
}

function addComment(event) {
  event.preventDefault();
  const commentList = document.getElementById("form-input");
  const comments = document.getElementById("list");
  comments.innerHTML += `<li>${commentList.value}</li>`;
}

function addLike(event) {
  likeCount[document.getElementById("counter").innerText] = likeCount[document.getElementById("counter").innerText]+1 || 1;
  console.log(likeCount)
  const likeList = document.getElementById("likes");
  likeList.innerHTML = '';
  for (n in likeCount){
    likeList.innerHTML += `<li>${n} has ${likeCount[n]} likes</li>`;
  };
}

function runCounter() {
  if (controlButton.innerText == "pause") {
    counter.innerText = parseInt(counter.innerText)+1
  }
  setTimeout(runCounter, 1000);
}

function runApp(event) {
  event.preventDefault();
  if (controlButton.innerText == "pause") {
    controlButton.innerText = "resume";
    for (var i = 0; i <= buttons.length-1; i++) {
        buttons[i].disabled=true;
    }
  } else {
    controlButton.innerText = "pause";
    for (var i = 0; i <= buttons.length-1; i++) {
        buttons[i].disabled=false;
    }
  }
}






