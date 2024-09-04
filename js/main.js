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

    const shopToggler = document.getElementById('filter-toggler');
    const shopFilter = document.getElementById('shop-filter');
    
    shopToggler.addEventListener('click', ()=> {
        if (shopFilter.classList.contains('show')) {
            shopFilter.classList.remove('show');
        } else {
            shopFilter.classList.add('show')
        }
    });

    
});

// quantity calculatin 

var rows = document.querySelectorAll('.product-table-row');



rows.forEach(row => {
    var inputNumber =  row.querySelector('#qty');
    var plus = row.querySelector('.qtyplus');
    var minus = row.querySelector('.qtyminus');
    var proPrice = row.querySelector('.pro-price');
    var proTotalPrice = row.querySelector('.pro-total-price');

    function changVal(vals) {
        var max = Number(inputNumber.getAttribute('max'));
        var min = Number(inputNumber.getAttribute('min'));

        var newValue = Number(inputNumber.value) + vals;

        if (newValue >= min && newValue <= max) {
            inputNumber.value = newValue;
        }
    }

    plus.addEventListener('click', ()=> {
        changVal(value=1)
    });

    minus.addEventListener('click', () => {
        changVal(value=-1)
    });
});

// quantity calculation
// var input = document.querySelector('#qty');
// var btnminus = document.querySelector('.qtyminus');
// var btnplus = document.querySelector('.qtyplus');

// if (input !== undefined && btnminus !== undefined && btnplus !== undefined && input !== null && btnminus !== null && btnplus !== null) {
	
// 	var min = Number(input.getAttribute('min'));
// 	var max = Number(input.getAttribute('max'));
// 	var step = Number(input.getAttribute('step'));

// 	function qtyminus(e) {
// 		var current = Number(input.value);
// 		var newval = (current - step);
// 		if(newval < min) {
// 			newval = min;
// 		} else if(newval > max) {
// 			newval = max;
// 		} 
// 		input.value = Number(newval);
// 		e.preventDefault();
// 	}

// 	function qtyplus(e) {
// 		var current = Number(input.value);
// 		var newval = (current + step);
// 		if(newval > max) newval = max;
// 		input.value = Number(newval);
// 		e.preventDefault();
// 	}
		
// 	btnminus.addEventListener('click', qtyminus);
// 	btnplus.addEventListener('click', qtyplus);
  
// } // End if test

// img toggle
const mainImg = document.querySelector('.main-img img');
const subImgs = document.querySelectorAll('.sub-img img')

subImgs.forEach(img => {
    img.addEventListener('click', ()=> {
        let tmp = mainImg.src;
        mainImg.src = img.src;
        img.src = tmp;
    });
});


// carts select all

// Get references to the select all checkbox and all checkboxes in the table
const selectAllCheckbox = document.getElementById('select-all');
const productCheckboxes = document.querySelectorAll('input[name="selected_products"]');

// Add an event listener to the "Select all" checkbox
selectAllCheckbox.addEventListener('change', function() {
    // Check or uncheck all product checkboxes based on the state of "Select all"
    productCheckboxes.forEach(checkbox => {
        checkbox.checked = selectAllCheckbox.checked;
    });
});

// Add event listeners to individual product checkboxes
productCheckboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        // If any checkbox is unchecked, uncheck the "Select all" checkbox
        if (!checkbox.checked) {
            selectAllCheckbox.checked = false;
        } else {
            // If all checkboxes are checked, check the "Select all" checkbox
            const allChecked = Array.from(productCheckboxes).every(cb => cb.checked);
            selectAllCheckbox.checked = allChecked;
        }
    });
});
