const loginForm = document.querySelector('#login-form');
const loginInput = loginForm.querySelector('input');
const loginButton = loginForm.querySelector('button');

function onLoginBtnClick() {
  const userName = loginInput.value;

  if (userName === '') {
    alert('please weite your name');
  } else if (userName.length > 15) {
    alert('your name is too long');
  }

  console.log('hello', loginInput.userName);
}

loginButton.addEventListener('click', onLoginBtnClick);
