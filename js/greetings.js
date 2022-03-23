const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

//we write the less useful variales capital,that ontains strings generally
const HIDDEN_CLASSNAME = 'hidden';
const USERNAME_KEY = 'username';
const greeting = document.querySelector('#greeting');

//this happens when we press enter  or we click the button
function onLoginSubmit(event) {
  //this stops the default behaviour any event from happening.
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const userName = loginInput.value;
  console.log(userName);
  localStorage.setItem(USERNAME_KEY, userName);
  paintGreetings(userName);

  //js will give the event that just happened as the first argument.
  // console.log(event);
}

function paintGreetings(username) {
  greeting.classList.remove(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${username}`;
}


const savedUserName = localStorage.getItem(USERNAME_KEY);

//============> Start of code <=============
if (savedUserName === null) {
  //show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener('submit', onLoginSubmit);
} else {
  //show the greetings
  paintGreetings(savedUserName);
}
