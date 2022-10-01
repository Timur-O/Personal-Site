// Get the modals
var modals = $('.modal');
// Get the buttons that opens the modal
var modalButtons = $('#nav_buttons').children().children();
// Get the <span> elements that closes the modals
var closingSpans = $('.close');
// Get current hash in url
var currURLHash = window.location.hash;

if ((modals.index($(currURLHash + "Modal")) !== -1)) {
    modals.hide();
    $(currURLHash + "Modal").show();
    $('body').addClass('is-article-visible');
}

// When the user clicks on the button, open the modal
modalButtons.on('click', (event) => {
    if (modals.index($('#' + event.target.className + "Modal")) !== -1) {
        modals.fadeOut("slow");
        $("#" + event.target.className + "Modal").fadeIn("slow");
        $('body').addClass('is-article-visible');
    }
});

// When the user clicks on <span> (x), close the modal
closingSpans.on('click', (event) => {
    modals.fadeOut("slow");
    $('body').removeClass('is-article-visible');
    window.location.hash = "";
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target.id !== '') {
        if (modals.index($('#' + event.target.id) !== -1)) {
            modals.fadeOut("slow");
            $('body').removeClass('is-article-visible');
            window.location.hash = "";
        }
    }
}