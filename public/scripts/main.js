$(document).ready(function(){

/*==========================

            MODEL

=============================*/

//------- ARRAYS ----------//


// ------ OBJECTS -----------------//


//------- FUNCTION CONSTRUCTORS ----------//


//------- ARRAY UPDATERS VIA FUNCTION CONSTRUCTORS -----//

/*===========================

            VIEW

=============================*/

//------- SELECTORS ----------//
var $galleryPhoto = $('.gallery-photo img');
var $lightboxHome = $('#lightboxHome');
var $lightboxCancelBtn = $('.lightbox__cancel-btn');
var $lightboxImg = $('.lightbox-img img');

//--------VARIABLES ----------//
var open = false;

//------ TEMPLATES ---------//


//------- EVENTS ----------//
$galleryPhoto.on({
    'click': function() {
        name = $(this).attr('src');
        open = true;
        lightboxController(open, name);
    }
});

$lightboxCancelBtn.on({
    'click' : function() {
        open = false;
        lightboxController(open);
    }
});

/*===========================

        CONTROLLER

=============================*/

//------- FUNCTIONS ----------//

//lightbox CONTROLLER
function lightboxController(){
    if(open){
        $lightboxHome.show();
    } else {
        $lightboxHome.hide();
    }

    $lightboxImg.attr('src' , name);
}


//------- FUNCTION CALLS ----------//
$('#calendar').fullCalendar();
lightboxController(open);

//console.log($('.gallery-photo'));
});