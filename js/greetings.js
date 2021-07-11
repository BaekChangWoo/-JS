const loginform = document.getElementById("login-form")
const loginInput = loginform.querySelector("input")
const greeting = document.querySelector("#greeting")
const HIDDEN_CLASSNAME = "hidden"
const USERNAME = "username"
const username= loginInput.value;

function paintGreeting(){
    usernamed=localStorage.getItem(USERNAME)
    greeting.innerText = `hello ${usernamed}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
  }
function onLoginsubmit(event){
 event.preventDefault()
 loginform.classList.add(HIDDEN_CLASSNAME)
 const username= loginInput.value;
 localStorage.setItem(USERNAME, username)
 paintGreeting()
}




const savedname = localStorage.getItem(USERNAME)

if (savedname === null ){
  loginform.classList.remove(HIDDEN_CLASSNAME)
  loginform.addEventListener("submit",onLoginsubmit);
} else {
 paintGreeting()
  }

