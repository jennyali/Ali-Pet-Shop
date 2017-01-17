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

//sm-screen menu-nav
var $smScreenNav = $('.sm-screen-nav');
var $burgerMenu = $('.burger-menu__wrapper > span');

//inline nav 
$dropdownAbout = $('#dropdown-inline-about');
$dropdownAboutList = $('#dropdown-inline-about ul');
$dropdownServices = $('#dropdown-inline-services');
$dropdownServicesList = $('#dropdown-inline-services ul');

//privateServices route
$tabContentRow = $('.tab-content-row');
$tabTextOverlay = $('.tab-content-img__text-overlay');

$servicesSelect = $('#servicesSelect');
$hotelServiceSm = $('#hotelServiceSm');
$groomingServiceSm = $('#groomingServiceSm');

//--------VARIABLES ----------//
var open = false;
var indexNumber = 0;

//------ TEMPLATES ---------//


//------- EVENTS ----------//

$servicesSelect.on({
    'change' : function() {
        servicesSelectController(this);
    }
});

$tabContentRow.on({
    'mouseenter' : function() {
        tabContentRowController(this, true);
    },

    'mouseleave' : function() {
        tabContentRowController(this, false);
    }
});

$burgerMenu.on({
    'click' : function() {
        burgerMenuController(this);
    }
});

$galleryPhoto.on({
    'click': function() {
        lightboxController(this);
    }
});

$lightboxCancelBtn.on({
    'click' : function() {
        lightboxController(this);
    }
});

$lightboxCtrlLeft.on({
    'click': function() {
        var addToNumber = false;
        lightboxBtnController(addToNumber);
    }
});

$lightboxCtrlRight.on({
    'click': function() {
        var addToNumber = true;
        lightboxBtnController(addToNumber);

    }
});


/*===========================

        CONTROLLER

=============================*/

//------- FUNCTIONS ----------//

//servicesSelect on privateServices sm-screen
function servicesSelectController(that) {
    //console.log($(that).val());
    if ($(that).val() === "grooming") {

        $hotelServiceSm.removeClass('active');
        $groomingServiceSm.addClass('active');

    } else if ($(that).val() === "hotel") {

        $groomingServiceSm.removeClass('active');
        $hotelServiceSm.addClass('active');

    } else {
        console.log("ERROR: no matching tab-pane");
    }
}


//tab-content img text-overlay
function tabContentRowController(that, boolean) {
    
    if(boolean) {

         $(that).find($tabTextOverlay)
                .removeClass('opacity--hide')
                .addClass('opacity--show');

    } else if (!boolean) {

         $(that).find($tabTextOverlay)
                .removeClass('opacity--show')
                .addClass('opacity--hide');
    } else {
        console.log('ERROR: controller 2nd arg needs boolean value needed');
    }
}

//dropdown menus
function dropdownAppear(listitem, dropdown) {
    $(listitem).on({
        'mouseenter': function() {
            $(dropdown).fadeIn();
        },

        'mouseleave': function() {
            $(dropdown).fadeOut();
        }
    });
}


//burger-menu CONTROLLER header
function burgerMenuController(that) {
    var className = $(that).attr('class');

    if(className === 'icon-bars') {

        $(that).addClass('icon-delete-1')
               .addClass('cancel-menu-btn');

        $smScreenNav.removeClass('display--none');

        $smScreenNav.animate({
            opacity: 1
        });

        $(that).removeClass('icon-bars');


    } else if (className === 'icon-delete-1 cancel-menu-btn') {
        $smScreenNav.animate({
            opacity: 0
        }, 'slow', function(){
           return $smScreenNav.addClass('display--none');
        });

        $(that).addClass('icon-bars')
                .removeClass('icon-delete-1')
                .removeClass('cancel-menu-btn');

    } else {
        console.log('ERROR incorrect class name');
    }
}

//lightbox CONTROLLER
function lightboxController(that) {
    var open = $(that).attr('data-open');
    
    if(open === "true"){
        $lightboxHome.removeClass('display--none');
    } else {
        $lightboxHome.addClass('display--none');
    }

    lightboxImgUpdate(that);
}

//lightbox btn CONTROLLER
function lightboxBtnController(boolean){
    var id = $lightboxImg.attr('data-id');
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

    lightboxImgUpdate(foundPhoto);  
}

// lightbox img UPDATE 

function lightboxImgUpdate(that){
    var src = $(that).attr('src');
    var id = $(that).attr('data-id');

    $lightboxImg.attr('src' , src);
    $lightboxImg.attr('data-id', id);
}


//------- FUNCTION CALLS ----------//
$('#calendar').fullCalendar();
$('.carousel').carousel();
dropdownAppear($dropdownAbout, $dropdownAboutList);
dropdownAppear($dropdownServices, $dropdownServicesList);
});