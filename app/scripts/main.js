//had some issues with google images in jquery.  Used imgur to stop 404 error

var myImageArray = [
"https://i.imgur.com/WWLkFIJ.jpg",
"https://i.imgur.com/uVkAESN.jpg",
"https://i.imgur.com/c3vPH1h.jpg",
];

var options={
	delay:3000,
	target:$('.container')
}

function createSlideshow () {
	for(var i=0;i<myImageArray.length; i++){
$('.container').append("<img src=" + myImageArray[i] + "/>");
}
}

createSlideshow();


function fade() {
        $('.fadein :container').fadeOut(2500).next('img').fadeIn(2500).end().appendTo('.fadein');
    }
    setTimeout(function() {
        fade();
        setInterval(fade, 3000);
    }, 6000);





   
/*var current = 0;
    var object = null;

    var images_array = new Array();
    images_array[0] = "rotator_1";
    images_array[1] = "rotator_2";
    images_array[2] = "rotator_3";

    var rotate_them = setInterval(function(){createSlideshow()},4000);

    function createSlideshow(){

        object = document.getElement(images_array[current]);

        if(current != 0) {

            var object_pass = document.getElement(images_array[current-1]);
            object_pass.style.left = "-300px";

        }
        else {

            object.style.left = "-300px";

        }

        var slideit = setInterval(function(){change_position(object)},30);

        current++;

        if (current == images_array.length+1) {

            var object_passed = document.getElement(images_array[current-2]);
            object_passed.style.left = "-300px";
            current = 0;
            createSlideshow();

        }

    }

    function change_position(object, type) {

        var intleft = parseInt(object.style.left);

        if (intleft != 0) {

            object.style.left = intleft + 32 + "px";

        }
        else if (intleft == 0) {

            clearInterval(slideit);

        }

    }*/










