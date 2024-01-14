
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});



const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));



document.addEventListener('scroll', () => {
    const header = document.querySelector('.topnav');

    if (window.scrollY > 730) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
})