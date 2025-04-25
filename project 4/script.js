var elem = document.querySelectorAll(".elem")

elem.forEach(function(val){
    val.addEventListener("mouseenter",function(){
        // ERROR: Using childNodes[3] to access image is fragile and may break if DOM structure changes
        val.childNodes[3].style.opacity = 1
    });
    val.addEventListener("mouseleave",function(){
        // ERROR: Using childNodes[3] to access image is fragile and may break if DOM structure changes
        val.childNodes[3].style.opacity = 0
    });
    val.addEventListener("mousemove",function(dets){
        // ERROR: dets.x and dets.y are viewport coordinates, not relative to the .elem div
        // This causes the image to be positioned incorrectly relative to the div
        val.childNodes[3].style.left = dets.x+"px"
        val.childNodes[3].style.top = dets.y+"px"
    });
});

