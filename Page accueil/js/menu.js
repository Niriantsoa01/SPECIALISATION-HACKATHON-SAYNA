const navLinks = document.querySelectorAll('nav ul');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.forEach((otherLink) => {
            otherLink.parentNode.classList.remove('active');
        });
        link.parentNode.classList.add('active');
    });
});

