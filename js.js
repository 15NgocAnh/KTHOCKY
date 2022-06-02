let loginForm = document.querySelector('.login-form');
 
  document.querySelector('.profile_user').onclick = () =>{
    loginForm.classList.toggle('active');
 }

 let hoctap = document.querySelector('.login-form-1');
 
  document.querySelector('.study').onclick = () =>{
    hoctap.classList.toggle('active');
 }

 let sp = document.querySelector('.login-form-2');
 
 document.querySelector('.san-pham').onclick = () =>{
   sp.classList.toggle('active');
}
 
function close() {
    loginForm.classList.remove('active')
}

loginForm.addEventListener('click',close)
loginForm.addEventListener('click', function(event) {
    event.stopPropagation()
})
