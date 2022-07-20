/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//     const scrollY = window.pageYOffset

//     sections.forEach(current =>{
//         const sectionHeight = current.offsetHeight,
//               sectionTop = current.offsetTop - 58,
//               sectionId = current.getAttribute('id')

//         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
//         }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
//         }
//     })
// }
// window.addEventListener('scroll', scrollActive)


const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.prueba');
    const menu_dropdown = dropdown.querySelector('.menu_dropdown');
    const options = dropdown.querySelector('.menu_dropdown li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('prueba-rotate');
        menu_dropdown.classList.toggle('menu_dropdown-open');
    });

    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('prueba-rotate');
            menu_dropdown.classList.remove('menu_dropdown-open');
            options.forEach(option => {
                option.classList.remove('active');
            });

            option.classList.add('active');
        });
    });
});