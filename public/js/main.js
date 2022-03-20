window.onload = () => {
    $(document).ready(function () {
        console.log($(".owl-carousel").owlCarousel);
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 50,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    autoplay: true,
                    autoplayTimeout: 3000,
                    autoplayHoverPause: false
                },
                701: {
                    items: 3,
                    loop: true,
                    autoplay: true,
                    autoplayTimeout: 2500,
                    autoplayHoverPause: false,
                    autoHeight: true
                }
            }
        });
    });

    if (window.innerWidth > 700) {
        const scaleCenterItem = () => {
            const itemLeft = document.querySelectorAll('.owl-item.active')[0];
            const itemCenter = document.querySelectorAll('.owl-item.active')[1];
            const itemRight = document.querySelectorAll('.owl-item.active')[2];
            const clonedItem = document.querySelectorAll('.owl-item.cloned')

            clonedItem.forEach(item => { item.style.transform = 'scale(1)' });

            itemLeft.style.transform = 'scale(1)'
            itemLeft.style.zIndex = '500'
            itemLeft.style.opacity = '0.4'

            itemCenter.style.transform = 'scale(1.5)'
            itemCenter.style.zIndex = '1000'
            itemCenter.style.opacity = '1'

            itemRight.style.transform = 'scale(1)'
            itemRight.style.zIndex = '500'
            itemRight.style.opacity = '0.4'
        }
        setInterval(() => {
            scaleCenterItem();
        })
    } else {
        const scaleCenterItem = () => {
            const itemCenter = document.querySelector('.owl-item.active')
            const itemSides = document.querySelectorAll('.owl-item')

            itemSides.forEach(item => item.style.transform = 'scale(0.8)')

            itemCenter.style.transform = 'scale(1)'
            itemCenter.style.zIndex = '1000'
            itemCenter.style.opacity = '1'
        }
        setInterval(() => {
            scaleCenterItem();
        })
    }
}