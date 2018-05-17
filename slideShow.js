var slidePosition = document.getElementById("slide");

counter = 1;
slideshowFunction = function(){
    slidePosition.src ="image00"+counter+".jpg";
    counter++;
    if(counter>5){
        counter=1;
    }
}

setInterval(slideshowFunction,2000)