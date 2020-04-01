var slideshow={
	photoList : ["Flight", "Food","Hotel"],
    currentPhotoIndex:0,
 
	getCurrentPhoto: function () {
	        console.log(this.photoList[this.currentPhotoIndex])
	        return null
	},

	nextPhoto: function ()  {
		if (this.currentPhotoIndex < this.photoList.length-1) {
			 this.currentPhotoIndex++
	    	console.log(this.photoList[this.currentPhotoIndex])
				    	console.log(this.photoList[this.currentPhotoIndex])

	        return null}
	     else
	     {
	        console.log("End of slideshow");
	        return null
	    }
	},

	prevPhoto: function () 
		{
	    
	    if (this.currentPhotoIndex == 0) 
	    	{
	    	console.log("Already at start of slideshow")
	        return null
	  		}
	    	else (this.currentPhotoIndex <= this.photoList.length-1) 
	    	{
	        	this.currentPhotoIndex--
	        	console.log(this.photoList[this.currentPhotoIndex])
	        	return null
	     	}
		}
}

slideshow.getCurrentPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.nextPhoto();
slideshow.prevPhoto();
slideshow.prevPhoto();
