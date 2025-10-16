const nav = () => {
    const burger = document.querySelector('.burger');
    const headerWrapper = document.querySelector('.header__wrapper');
    const body = document.querySelector('body');
    const header = document.querySelector('.header');
    let scrollPosition = 0;

    burger.addEventListener('click', function (e) {
        e.stopPropagation();

        if (!headerWrapper.classList.contains('active')) {
            scrollPosition = window.pageYOffset;

            headerWrapper.classList.add('active');
            burger.classList.add('open');

            if (header.classList.contains('sticky')) {
                header.style.top = '0';
            }

            setTimeout(() => {
                body.style.overflow = 'hidden';
                body.style.height = '100%';
            }, 800);
        } else {
            headerWrapper.classList.remove('active');
            burger.classList.remove('open');

            body.style.overflow = '';
            body.style.height = '';

            window.scrollTo(0, scrollPosition);
        }
    });

    const navLinks = document.querySelectorAll('.nav__link');
    navLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            headerWrapper.classList.remove('active');
            burger.classList.remove('open');
        });
    });

    document.addEventListener('click', function (e) {
        if (!headerWrapper.contains(e.target) && !burger.contains(e.target)) {
            headerWrapper.classList.remove('active');
            burger.classList.remove('open');
        }
    });

    document.addEventListener('DOMContentLoaded', function () {
        const currentPage = window.location.pathname.split('/').pop();
        const navLinks = document.querySelectorAll('.nav__link');

        navLinks.forEach(link => {
            if (link.getAttribute('href') === currentPage) {
                link.classList.add('link_active');
            }
        });
    });
};
nav();

const stickyHeader = () => {
    const header = document.querySelector('.header');
    const headerHeight = header.offsetHeight;

    function updateBodyPadding(isSticky) {
        document.body.style.paddingTop = isSticky ? headerHeight + 'px' : '0';
    }

    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 100) {
            if (!header.classList.contains('sticky')) {
                header.classList.add('sticky');
                updateBodyPadding(true);
            }
        } else {
            if (header.classList.contains('sticky')) {
                header.classList.remove('sticky');
                updateBodyPadding(false);
            }
        }
    });

    if (window.scrollY > 100) {
        header.classList.add('sticky');
        updateBodyPadding(true);
    }

    window.addEventListener('resize', function () {
        const newHeaderHeight = header.offsetHeight;

        if (header.classList.contains('sticky')) {
            document.body.style.paddingTop = newHeaderHeight + 'px';
        }
    });
};
stickyHeader();

const lenis = new Lenis({
    lerp: 0.1,
    smooth: true,
    direction: 'vertical',
    gestureDirection: 'vertical',
});

function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
