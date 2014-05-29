//had some issues with google images in jquery.  Used imgur to stop 404 error

var myImageArray = [
"https://i.imgur.com/WWLkFIJ.jpg",
"https://i.imgur.com/uVkAESN.jpg",
"https://i.imgur.com/c3vPH1h.jpg",
];

var options={
	delay:8000,
	target:$('.container')
}


 createSlideshow();

var function = image{}


function createSlideshow () {
	for(var i=0;i<myImageArray.length; i++){
$('.container').append("<img src=" + myImageArray[i] + "/>");
}
}

function slideshow (array) {
if 
($.isArray(array)) {
throw new error ('Not an array!');
} else {
($.isArray([])) 
throw new error ('Array is empty!');
}
}



	/*window.onload=function(){
                for(var i=0;i<10;i++){
                    var img=document.createElement('img');
                    img.setAttribute('src','myImageArray'+i+'.jpg');
                    document.body.appendChild(img);
                
      }
  }*/

 
/*Header's example*/
 var fml = 0;
function slidePic () {
// count up 1
fml +=1;
// after counting up to the length of the array reset.
if (fml>= myImageArray.length) {
fml = 0;
}
// move back -400 for current 
var position = fml * -400;

$('.slides').animate({marginLeft: position}, 500);	
}

		





   
