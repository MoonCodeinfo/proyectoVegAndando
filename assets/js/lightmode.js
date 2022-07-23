const body = document.querySelector('body');
const toggle = document.getElementById('darkMode');
toggle.onclick = () => {
    toggle.classList.toggle('active');
    body.classList.toggle('active');
}