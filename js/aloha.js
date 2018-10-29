$(function () {
 
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      || location.hostname == this.hostname) {

      var headerHeight = $('header').outerHeight();
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - headerHeight
        }, 1000);
        return false;
      }
    }
  });

  $('.main-carousel').flickity({
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    draggable: false
  });



  var counter = 0;

  $('.addcartbutton').on('click', function () {

    counter++;
    
    if (counter > 0) {
      $('.cartcontainer span').html('<span class="number-cart">' + counter + '</span>');
    }
  });






  $(".subscribebutton").on("click", function (event) {
    const emailaddress = $("#emailaddress")[0].value;
    const validemail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

    if (emailaddress.match(validemail)) {
      alert("Thanks for subscribing!");
    } else {
      alert("Enter a valid email address!")
    }
  });

});




