const toPage2Btn = document.getElementById('nav-page-2');
const page2 = document.querySelector('.page-2')

toPage2Btn.addEventListener('click', (e) => {
    e.preventDefault();
    if (page2.classList.contains('active')) {
        page2.classList.remove('active')
    } else {
        page2.classList.add('active')
    }
});
