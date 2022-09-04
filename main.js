var nav = document.querySelector('nav');
        window.addEventListener('scroll', function () {
        if (window.pageYOffset > 20) {
            nav.classList.add('bg-dark', 'shadow');
        } else {
            nav.classList.remove('bg-dark', 'shadow');
        }
});

const buttons = document.querySelectorAll('button');

        buttons.forEach( button =>{
            button.addEventListener('click',()=>{
                const faq = button.nextElementSibling;
                const icon = button.children[1];
                faq.classList.toggle('show');
                icon.classList.toggle('rotate');
            })
} )
