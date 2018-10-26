$(function() {
  // your jQuery code here...



$('.main-carousel').flickity({
    // options
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    draggable: false
  });

  $(".subscribebutton").on("click", function(event) {
    var emailaddress = $("#emailaddress")[0].value; 
    var validemail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
  
    if (emailaddress.match(validemail))
    {
      alert("Thanks for subscribing!");
    }
      alert("Enter a valid email address!")
  });

});

//   function validemailadd(){
// var emailaddress = document.getElementById('emailaddress').value; 

// var validemail = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;

//   if (emailaddress.match(validemail))
//   {
//     alert("Thanks for subscribing!");
//    return (true)
    
//   }
//     alert("Enter a valid email address!")
//     return (false)
// }


//   $('.main-carousel').flickity({
//     // options
//     cellAlign: 'left',
//     contain: true,
//     prevNextButtons: false
//   });



//$(".submitform".val(),.email: $("input[name=email]").val(), 
  //$(".subscribebutton").on("click", function() {

  
   // alert("Thanks for subscribing!");
  //});







  //$(".submitform".val(),.email: $("input[name=email]").val(), 
  //$(".subscribebutton").on("click", function() {
   // alert("Thanks for subscribing!");
  //});


 

