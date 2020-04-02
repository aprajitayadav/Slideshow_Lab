var slideshow={
	photoList : ["Flight", "Food","Hotel"],
    currentPhotoIndex:0,
    playInterval:null,
 
	getCurrentPhoto: function () {
	        console.log(this.photoList[this.currentPhotoIndex])
	        return null
	},

	nextPhoto: function ()  {
		if (this.currentPhotoIndex < this.photoList.length-1) {
			 this.currentPhotoIndex++
			
	    	console.log(this.photoList[this.currentPhotoIndex])
	        return null}
	     else
	     {
            this.pause()
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
		},

     pause: function(){ 
       		clearInterval(this.playInterval);

       },

	play: function () 
		{
			var a=this;	
			if (this.currentPhotoIndex < this.photoList.length-1) {
				 
				console.log(this.photoList[this.currentPhotoIndex])
		    	this.playInterval = setInterval(function(){
					a.nextPhoto();
	        	},2000)
		        return null}
		     else
		     {
		        console.log("End of slideshow!");
				return
		    }		
		}
}

slideshow.play();

