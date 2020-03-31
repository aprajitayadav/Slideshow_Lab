var photoList = ["Flight", "Food","Hotel"];
let plen = photoList.length
let currentPhotoIndex=0;

getCurrentPhoto();
nextPhoto();
nextPhoto();
nextPhoto();
prevPhoto();
prevPhoto();
prevPhoto();

function nextPhoto() {
	if (currentPhotoIndex < plen-1) {
		 currentPhotoIndex=currentPhotoIndex + 1
    	console.log(photoList[currentPhotoIndex])
        return null}
     else
     {
        console.log("End of slideshow");
        return null
    }
}

function prevPhoto() 
	{
    
    if (currentPhotoIndex == 0) 
    	{
    	console.log("Already at start of slideshow")
        return null
  		}
    	else (currentPhotoIndex <= plen) 
    	{
        	currentPhotoIndex=currentPhotoIndex - 1
        	console.log(photoList[currentPhotoIndex])
        	return null
     	}
	}

function getCurrentPhoto() {
        console.log(photoList[currentPhotoIndex])
        return null
}

