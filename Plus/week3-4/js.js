//challenge1
let click = document.querySelector("#special-button");
function func() {
  alert("Hooray!");
}

click.addEventListener("click", func);
//challenge2
let save = document.querySelector("#password-form");
function func2(event) {
  event.preventDefault();
  let password = document.querySelector("#password-input");
  alert(`🙀 Your super secret password is ${password.value}`);
}
save.addEventListener("submit", func2);

//chalenge3
let all = document.querySelector("#signup-form");
function together(event) {
  event.preventDefault();
  let email = document.querySelector("#email-input");
  let username = document.querySelector("#username-input");
  alert(`Your email is ${email.value}`);
  alert(`Your username is ${username.value}`);
}
all.addEventListener("submit", together);
