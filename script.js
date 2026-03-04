// script.js
document.addEventListener('DOMContentLoaded', () => {

    // 基本的 Navbar 隨滾動變色的效果 (選項)
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.boxShadow = '0 2px 10px rgba(0,0,0,0.05)';
        } else {
            navbar.style.boxShadow = 'none';
        }
    });

    // 實作 Scroll Reveal 動畫邏輯 (當區塊進入視窗時加上動畫 class)
    const scrollElements = document.querySelectorAll('.js-scroll');

    const elementInView = (el, dividend = 1) => {
        const elementTop = el.getBoundingClientRect().top;
        return (
            elementTop <=
            (window.innerHeight || document.documentElement.clientHeight) / dividend
        );
    };

    const displayScrollElement = (element) => {
        element.classList.add('scrolled');
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
        element.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    };

    const handleScrollAnimation = () => {
        scrollElements.forEach((el) => {
            // 初始化隱藏狀態
            if (!el.classList.contains('scrolled-init')) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(30px)';
                el.classList.add('scrolled-init');
            }
            if (elementInView(el, 1.25)) {
                displayScrollElement(el);
            }
        });
    };

    // 初始化一次
    handleScrollAnimation();

    // 監聽滾動事件
    window.addEventListener('scroll', () => {
        handleScrollAnimation();
    });
});
