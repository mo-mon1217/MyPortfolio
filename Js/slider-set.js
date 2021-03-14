/*$('.slider').slick({
    autoplay: true,
    autoplaySpeed: 5000,
    dots: true,
    slidesToShow: 2,
    slidesToScroll: 2
});*/

jQuery(function ($) {
    $(document).ready(function () {
        $('.slider').slick({
            /*slidesToShow: 3,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]*/
            variableWidth: true,
            centerMode: true,
            /*centerPadding: '50%',
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        centerMode: true,
                        centerPadding: '25%',
                    }
                },
                {
                    breakpoint: 780,
                    settings: {
                        centerMode: true,
                        centerPadding: '0%',
                    }
                },
                ]*/

        });
    });
});
