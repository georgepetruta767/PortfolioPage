
var portfolio = (function(){
    
    let portfolioObj = {};
    currentImageIndex = 0;
    
    portfolioObj.updateSlideShowImage = (direction) =>{
        var allImages = document.getElementsByClassName("slidePiece");
        currentImageIndex = currentImageIndex + direction;
        if(currentImageIndex >= allImages.length){
            currentImageIndex = 0;
        }
        if(currentImageIndex < 0){
            currentImageIndex = allImages.length - 1;
        }
        for(i = 0; i < allImages.length; i++){
            if(i != currentImageIndex){
                allImages[i].style.display = 'none';
            }
        }
        allImages[currentImageIndex].style.display = 'block';
    }

    portfolioObj.displayModal = (imageIndex) =>{
        document.getElementById("overlay").style.display = 'block';
        var image = document.getElementsByClassName("recentPhoto")[imageIndex];
        document.getElementById("modalImg").src = image.src;
        document.getElementById("myModal").style.display = 'block';
        document.getElementsByClassName("portraitIndex")[0].innerHTML = imageIndex + 1;
        document.getElementsByClassName("portraitNumber")[0].innerHTML = 4 - imageIndex;
    }

    portfolioObj.hideModal = () =>{
        document.getElementById("overlay").style.display = 'none';
        document.getElementById("myModal").style.display = "none";
        /*document.getElementsByClassName("modal")[0].style.removeProperty(height);
        document.getElementsByClassName("modal")[0].style.removeProperty(width);
        document.getElementById("modalImg").style.removeProperty(height); 
        document.getElementById("modalImg").style.removeProperty(width);*/
    }

    portfolioObj.enlargeModal = () => {
        let image = new Image();
        let imageIndex = document.getElementsByClassName("portraitIndex")[0].innerHTML.toString();
        let originalImageSrc = "Photos/Photo_1";
        image.src = originalImageSrc;
        /*document.getElementsByClassName("modal")[0].style.height = '816px';
        document.getElementsByClassName("modal")[0].style.width = '643px';
        document.getElementById("modalImg").style.height = '800px';
        document.getElementById("modalImg").style.width = '627px';*/
    }

    portfolioObj.updateSlideShowImage(0);
    document.getElementsByClassName("slideButton1")[0].addEventListener("click", function(){
        portfolioObj.updateSlideShowImage(-1);
    });

    document.getElementsByClassName("slideButton2")[0].addEventListener("click", function(){
        portfolioObj.updateSlideShowImage(1);
    });

    document.getElementsByClassName("closeButton")[0].addEventListener("click", function(){
        portfolioObj.hideModal();
    });

    document.getElementsByClassName("enlargeButton")[0].addEventListener("click", function(){
        portfolioObj.enlargeModal();
    });


    let imageIndex = 0;
    let recentPhotoDivs = document.querySelectorAll("div.recentPhotoDiv");
    recentPhotoDivs.forEach(function(elem, imageIndex){
        
        elem.addEventListener("click", function(){
            portfolioObj.displayModal(imageIndex);
        });
    });

    return portfolioObj;
}());



