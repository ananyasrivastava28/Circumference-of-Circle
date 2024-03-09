const PI= 3.14;
let radius;
let circumference;


document.getElementById("submit").onclick= function(){
   radius= document.getElementById("mytext").value;
    radius= Number(radius);
    circumference= 2*PI*radius;
    document.getElementById("myh3").textContent= "Circumference is " + circumference;
    circle.style.width = (2 * radius) + 'px';
    circle.style.height = (2 * radius) + 'px';
}

