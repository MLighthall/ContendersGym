    
 var slider = new MasterSlider();
    slider.setup('masterslider' , {
        width:1000,
        height:500,
        space:10,
        preload:3,
        view:'basic'
    });
    slider.control('arrows');  
     
    var gallery = new MSGallery('ms-gallery-1' , slider);
    gallery.setup();
     