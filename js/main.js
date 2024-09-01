$(document).ready(function(){

    $('#bestSells').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });

    // Initialize carousel for the #products element
    $('#products').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 4
            }
        }
    });
    

    // Initialize carousel for any other owl-carousel element
    $('.owl-carousel:not(#products)').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    var dots = document.querySelectorAll('.owl-dot span');
    for(let i = 0; i<dots.length; i++){
        var value = i+1;
        if(i<10) {
            dots[i].innerText = '0'+value;
        } else {
            dots[i].innerText = value;
        }
    }

    $('.owl-prev span').text('Prev');
    $('.owl-next span').text('Next');
});

document.addEventListener('DOMContentLoaded', () => {
    const header = document.getElementById('header');
    const searchIcon = document.getElementById('search-icon');
    const searchBar = document.getElementById('search-bar');

    searchIcon.addEventListener('click', function() {
        if (searchBar.classList.contains('show-search')) {
            searchBar.classList.remove('show-search');
        } else {
            searchBar.classList.add('show-search');
        }
    });

    window.addEventListener('scroll', () => {
        header.classList.toggle('sticky', window.scrollY > 200);
    });
});

