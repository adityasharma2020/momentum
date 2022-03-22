const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');

//we write the less useful variales capital,that ontains strings generally 
const HIDDEN_CLASSNAME = 'hidden';
const greeting = document.querySelector('#greeting');

//this happens when we press enter  or we click the button
function onLoginSubmit(event) {
  //this stops the default behaviour any event from happening.
  event.preventDefault();
  const userName = loginInput.value;
  console.log(userName)
  loginForm.classList.add(HIDDEN_CLASSNAME);
  greeting.innerText = `hello ${userName}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);

  //js will give the event that just happened as the first argument.
  // console.log(event);
}

function handleLinkClick(event) {
  event.preventDefault();
  console.dir(event);
}

loginForm.addEventListener('submit', onLoginSubmit);
