document.addEventListener('DOMContentLoaded', () => {
    const artItems = document.querySelectorAll('.art-item');
    const detailView = document.querySelector('.detail-view');
    const closeBtn = document.querySelector('.close-btn');

    // 打开详情页
    artItems.forEach(item => {
        item.addEventListener('click', () => {
            gsap.to(detailView, { 
                duration: 0.6, 
                opacity: 1, 
                display: 'flex', 
                ease: "power4.inOut" 
            });
            gsap.fromTo(".detail-img-placeholder", 
                { y: 100, opacity: 0 }, 
                { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
            );
            gsap.from(".detail-text > *", {
                x: 50,
                opacity: 0,
                duration: 0.8,
                stagger: 0.1,
                ease: "power3.out",
                delay: 0.4
            });
        });
    });

    // 关闭详情页
    closeBtn.addEventListener('click', () => {
        gsap.to(detailView, { 
            duration: 0.4, 
            opacity: 0, 
            display: 'none', 
            ease: "power2.inOut" 
        });
    });
});