$(function () {
 
  function scrollToLink() {
    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
      || location.hostname === this.hostname) {

    const headerHeight = $('header').outerHeight();
      let target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 1000);
        return false;
      }
    }
  }

  $('a[href*="#"]:not([href="#"])').click(scrollToLink);

  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    draggable: false
  });



 function shoppingCart() {
  let cartCounter = 0;
    cartCounter++;    
    if (cartCounter > 0) {
      $('.cartContainer span').html('<span class="number-cart">' + cartCounter + '</span>');
    }
  // });
 }
//  $('.addcartbutton').on('click', shoppingCart)
$('.addcartbutton').click(shoppingCart);



function validateEmail() {
  // $(".subscribebutton").on("click", function (event) {
    const emailAddress = $("#emailaddress")[0].value;
    const validEmail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (emailAddress.match(validEmail)) {
      alert("Thanks for subscribing!");
    } else {
      alert("Enter a valid email address!")
    }
  }
  // });
   $(".subscribebutton").click(validateEmail); 
});




