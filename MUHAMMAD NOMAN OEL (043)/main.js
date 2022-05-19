function validate(){
   var Pname = document.getElementById("Pname").value;
   var NumberofGuests = document.getElementById("NumberofGuests").value;
   var email = document.getElementById("email").value;
   if(Pname.length < 5){
      alert("Please Enter Correct Place name");
      return false;
   }
   if(NumberofGuests.length < 1){
     alert("Please Enter Correct NumberofGuests");
     return false;
   }
   if(email.indexOf("@") == -1 || email.length < 6){
     alert("Please Enter valid Email");
     return false;
   }
   alert("Booking was Successfull!");
   return true;
 }

 

let nCount = selector => {
  $(selector).each(function () {
    $(this)
      .animate({
        Counter: $(this).text()
      }, {
        // A string or number determining how long the animation will run.
        duration: 4000,
        // A string indicating which easing function to use for the transition.
        easing: "swing",
        /**
         * A function to be called for each animated property of each animated element. 
         * This function provides an opportunity to
         *  modify the Tween object to change the value of the property before it is set.
         */
        step: function (value) {
          $(this).text(Math.ceil(value));
        }
      });
  });
};

let a = 0;
$(window).scroll(function () {
  // The .offset() method allows us to retrieve the current position of an element  relative to the document
  let oTop = $(".numbers").offset().top - window.innerHeight;
  if (a == 0 && $(window).scrollTop() >= oTop) {
    a++;
    nCount(".rect > h1");
  }
});



/**
 *
 *  sticky navigation
 *
 */

let navbar = $(".navbar");

$(window).scroll(function () {
  // get the complete hight of window
  let oTop = $(".section-2").offset().top - window.innerHeight;
  if ($(window).scrollTop() > oTop) {
    navbar.addClass("sticky");
  } else {
    navbar.removeClass("sticky");
  }
});