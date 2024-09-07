document.addEventListener('DOMContentLoaded', ()=> {
    const optList = document.querySelector('.list-options');
    const options = optList.querySelectorAll('.option');
    const values = document.querySelector('.values');
    const showVals = values.querySelectorAll('.value');

    options.forEach((option, index) => {
        option.addEventListener('click', () => {
            options.forEach(opt => opt.classList.remove('active'));
            option.classList.add('active');
            showVals.forEach((show, i) => {
                if (i === index) {
                    show.classList.remove('d-none');
                    show.classList.add('active', 'show');
                } else {
                    show.classList.remove('active', 'show');
                    show.classList.add('d-none');
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', ()=> {
    const profileToggler = document.getElementById('profile-toggler');
    const profileMenu = document.getElementById('profil-menu');
    profileToggler.addEventListener('click', ()=> {
        if (profileMenu.classList.contains('show')) {
            profileMenu.classList.remove('show');
        } else {
            profileMenu.classList.add('show');
        }
    });
});

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

document.addEventListener('DOMContentLoaded', ()=> {
    var rows = document.querySelectorAll('.product-table-row');
    var selectAllProducts =  document.querySelector('#select-all');
    var subTotalPrice = document.getElementById('subTotal');
    var tax = document.querySelector('.tax');
    var taxShow = document.querySelector('.taxShow');
    var Total = document.querySelector('.amountTotal');
    var couponDiscount = document.getElementById('coupon-discount');

    function calculateSubtotal() {
        var allSelectedProPrice = document.querySelectorAll('.selected');
        var subTotal = 0
        if (allSelectedProPrice.length > 0) {
            allSelectedProPrice.forEach((selected) => {
                // console.log(`Element ${index + 1}:`, element); 
                var price = Number(selected.getAttribute('value'));
                subTotal += price;
            });

            subTotalPrice.setAttribute('value', subTotal);
            subTotalPrice.innerText = subTotal;
            let taxPercentage = Number(tax.getAttribute('value'));
            let taxAmount = (subTotal * (taxPercentage / 100)).toFixed(2);
            taxShow.setAttribute('value',taxAmount);
            taxShow.innerText = taxAmount;

            let amountTota = 0;
            let discount = Number(couponDiscount.getAttribute('value'));
            if (discount > 0) {
                amountTotal = Number(subTotal) + Number(taxAmount) - discount ;
            } else {
                amountTotal = Number(subTotal) + Number(taxAmount);
            }
            
            Total.setAttribute('value', amountTotal);
            Total.innerText = amountTotal;
        } 

    };


    selectAllProducts.addEventListener('change', ()=> {
        rows.forEach(row => {
            var selectedProduct = row.querySelector('.pro-total-price');
            if (selectAllProducts.checked) {
                selectedProduct.classList.add('selected')
            } else {
                selectedProduct.classList.remove('selected')
            }
        });
        calculateSubtotal()
    });

    rows.forEach(row => {
        var inputNumber =  row.querySelector('#qty');
        var plus = row.querySelector('.qtyplus');
        var minus = row.querySelector('.qtyminus');
        var proPrice = row.querySelector('.pro-price');
        var proTotalPrice = row.querySelector('.pro-total-price');
        var selectedProduct = row.querySelector('.selected_products');


        selectedProduct.addEventListener('change', () => {
            checkSelect(selectedProduct);
        });

        function checkSelect(selectedProduct) {
            if (selectedProduct.checked) {
                proTotalPrice.classList.add('selected')
            } else {
                proTotalPrice.classList.remove('selected')
            }
            calculateSubtotal()
        }
    
        function changVal(vals) {
            var max = Number(inputNumber.getAttribute('max'));
            var min = Number(inputNumber.getAttribute('min'));
    
            var newValue = Number(inputNumber.value) + vals;
    
            if (newValue >= min && newValue <= max) {
                inputNumber.value = newValue;
                var newPrice = Number(proPrice.getAttribute('value')) * newValue;
                proTotalPrice.setAttribute('value', newPrice);
                proTotalPrice.innerText = newPrice;
            }
            calculateSubtotal()
        }
    
        plus.addEventListener('click', ()=> {
            changVal(value=1)
        });
    
        minus.addEventListener('click', () => {
            changVal(value=-1)
        });
    });
});



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


// profile

