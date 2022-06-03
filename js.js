let loginForm = document.querySelector('.login-form');
let hoctap = document.querySelector('.login-form-1');
let sp = document.querySelector('.login-form-2');
let image = document.querySelector('.login-form-3');
 
document.querySelector('.ca-nhan').onclick = () =>{
  loginForm.classList.toggle('active');
  hoctap.classList.remove('active');
  sp.classList.remove('active');
  image.classList.remove('active');
}
 
 
document.querySelector('.study').onclick = () =>{
  hoctap.classList.toggle('active');
  loginForm.classList.remove('active');
  sp.classList.remove('active');
  image.classList.remove('active');
}


document.querySelector('.san-pham').onclick = () =>{
    sp.classList.toggle('active');
    hoctap.classList.remove('active');
    loginForm.classList.remove('active');
    image.classList.remove('active');
}


document.querySelector('.allbum').onclick = () =>{
    image.classList.toggle('active');
    sp.classList.remove('active');
    hoctap.classList.remove('active');
    loginForm.classList.remove('active');
}

window.onscroll = () =>{
    sp.classList.remove('active');
    hoctap.classList.remove('active');
    loginForm.classList.remove('active');
    image.classList.remove('active');
}

document.querySelector('.close').onclick = () =>{
    loginForm.classList.remove('active');
}

document.querySelector('.close-1').onclick = () =>{
  hoctap.classList.remove('active');
}

document.querySelector('.close-2').onclick = () =>{
  sp.classList.remove('active');
}

document.querySelector('.close-3').onclick = () =>{
  image.classList.remove('active');
}