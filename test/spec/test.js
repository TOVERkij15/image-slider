/* global describe, it */

/*ok homework: build an image slider. Create a function that takes an array of image urls and will display each one full size in a div and transition to the next one after x number of seconds. Unit tests required, but only 3 or 4 test probably needed*/

/*(function () {
    'use strict';

    describe('Give it some context', function () {
        describe('maybe a bit more context here', function () {
            it('should run here few assertions', function () {
              var answer = 2;
              expect(2).to.equal(answer);
            });
        });
    });
})();*/

/*(function () {
    'use strict';
 	
 	describe("image slider", function(){
 
      it("should loop through the []", function(){
        
        var array = [1,2,3];
 
        for(var i = 0; i < array; i += 1) {
          var result = array.length();
          expect(result).to.equal(3);
}
    });
    
})();*/

(function(){
//////description            ///1st arg.
	describe("image-slider",function(){
///////What does it do?                         
	it("should inject the correct # of img tags",
///////////2nd arg.
		function(){

	//check the DOM
	//Div in the html///////looking for img.tags
	var total=$('.container img').length;
	//(3)The amount of images you have
	expect(total).to.equal(3);
})

})
})();

