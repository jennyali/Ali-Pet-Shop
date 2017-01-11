$(document).ready(function(){



/*==========================

            MODEL

=============================*/

//------- ARRAYS ----------//
var photosArray = $('.gallery-photo img'); // gallery for lightbox

// ------ OBJECTS -----------------//


//------- FUNCTION CONSTRUCTORS ----------//


//------- ARRAY UPDATERS VIA FUNCTION CONSTRUCTORS -----//

/*===========================

            VIEW

=============================*/

//------- SELECTORS ----------//
var $galleryPhoto = $('.gallery-photo img');

// lightbox
var $lightboxHome = $('#lightboxHome');
var $lightboxCancelBtn = $('.lightbox__cancel-btn');
var $lightboxCtrlLeft = $('.lightbox-control--left');
var $lightboxCtrlRight = $('.lightbox-control--right');
var $lightboxImg = $('.lightbox-img img');

//homepage articles
var $homeArticles = $('#homeArticles article');

//--------VARIABLES ----------//
var open = false;
var indexNumber = 0;

//------ TEMPLATES ---------//


//------- EVENTS ----------//


$galleryPhoto.on({
    'click': function() {
        var name = $(this).attr('src');
        var id = $(this).attr('data-id');
        open = true;
        lightboxController(open, name, id);
    }
});

$lightboxCancelBtn.on({
    'click' : function() {
        open = false;
        lightboxController(open);
    }
});

$lightboxCtrlLeft.on({
    'click': function() {
        var id = $lightboxImg.attr('data-id');
        var addToNumber = false;
        lightboxBtnController(id, addToNumber);
    }
});

$lightboxCtrlRight.on({
    'click': function() {
        var id = $lightboxImg.attr('data-id');
        var addToNumber = true;
        lightboxBtnController(id, addToNumber);

    }
});


/*===========================

        CONTROLLER

=============================*/

//------- FUNCTIONS ----------//

//lightbox CONTROLLER
function lightboxController(open, src, id){
    if(open){
        $lightboxHome.removeClass('display--none');
    } else {
        $lightboxHome.addClass('display--none');
    }

    lightboxImgUpdate(src, id);
}

//lightbox btn CONTROLLER
function lightboxBtnController(id, boolean){
    var incrementNumber = boolean;
    var arrayLength = photosArray.length;
    var currentIndexNumber = 0;

    _.each(photosArray, function(photo, index){ // finds matching data-id and increments index number
        var foundItemId = $(photo).attr('data-id');

            if(foundItemId === id) {
                currentIndexNumber = index;
                return currentIndexNumber;
            }
    });

    if (boolean === true) {
        indexNumber = (currentIndexNumber + 1);

        if (indexNumber === arrayLength) {
            indexNumber = 0;

        }
                    
    } else if (indexNumber === 0 && boolean === false) {
        indexNumber = (arrayLength - 1);


    } else if (indexNumber > 0 && boolean === false) {
        indexNumber = (currentIndexNumber - 1);
        
    }

    var foundPhoto = photosArray[indexNumber];
    var foundPhotoId = $(foundPhoto).attr('data-id');
    var foundPhotoSrc = $(foundPhoto).attr('src');

    lightboxImgUpdate(foundPhotoSrc, foundPhotoId);  
}

// lightbox img UPDATE 
function lightboxImgUpdate(src, id){
    $lightboxImg.attr('src' , src);
    $lightboxImg.attr('data-id', id);
}



//------- FUNCTION CALLS ----------//
$('#calendar').fullCalendar();
$('.carousel').carousel();
});