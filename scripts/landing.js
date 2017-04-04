var pointsArray = document.getElementsByClassName("point");

var animatePoints = function(points) {
        for(var i = 0; i <= pointsArray.length; i++) {      
          pointsArray[i].style.opacity = 1;
          pointsArray[i].style.transform = "scaleX(1) translateY(0)";
          pointsArray[i].style.msTransform = "scaleX(1) translateY(0)";
          pointsArray[i].style.WebkitTransform = "scaleX(1) translateY(0)";
        }; 
}
                
   

$(window).load(function() {
    // #1
    if ($(window).height() > 950) {
        animatePoints();
    }
    
    // #2
    var scrollDistance = $('.selling-points').offset().top - $(window).height() + 200; 
    
    // #3
    $(window).scroll(function(event) {
    
    // #4
        if ($(window).scrollTop() >= scrollDistance) {
        animatePoints();
        }
    });
});
