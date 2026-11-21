// menu hamburger
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', ()=>{

    navLinks.classList.toggle('active');
});

// dark mode
const darkModeToggle = document.getElementById('darkModeToggle');

darkModeToggle.addEventListener('click', ()=>{

    document.body.classList.toggle('dark');
});

// alterar icone
if(document.body.classList.contains('dark')){

    darkModeToggle.textContent = '☀';
}else{

    darkModeToggle.textContent = '🌑';
}
