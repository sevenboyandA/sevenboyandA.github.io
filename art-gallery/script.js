// 模拟详情页转场
const artItems = document.querySelectorAll('.art-item');
const detailView = document.querySelector('.detail-view');

artItems.forEach(item => {
    item.addEventListener('click', () => {
        const img = item.querySelector('img');
        // 注：如果需要更丝滑的Flip效果，需额外引入GSAP的Flip插件
        // const state = Flip.getState(img);

        // 1. 背景淡入
        gsap.to(detailView, { duration: 0.6, opacity: 1, display: 'flex', ease: "power4.inOut" });

        // 2. 图片丝滑位移与缩放
        gsap.fromTo(".detail-img-placeholder", 
            { y: 100, opacity: 0 }, 
            { y: 0, opacity: 1, duration: 1, ease: "expo.out", delay: 0.2 }
        );

        // 3. 文字联动展示
        gsap.from(".detail-text", {
            x: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
            delay: 0.4
        });
    });
});