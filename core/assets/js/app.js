/* Some day I might rewrite this whole things withough jQuery. */
/* Today is not that day. */

// Owl Carousel for Portfolio on page load
$(document).ready(() => {
    $(`.owl-carousel`).owlCarousel();
});

// Owl Carousel properties
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    dots: false,
    nav: true,
    rewindNav: true,
    // some bigger, more noticeable arrows than stock Owl
    navText: [`<i class="fa fa-chevron-left"></i>`, `<i class="fa fa-chevron-right"></i>`],
    // mobile screens show 1 and slideBy 1 at a time, big screens are 3 & 3
    responsive: {
        0: {
            items: 1,
            slideBy: 1
        },
        576: {
            items: 3,
            slideBy: 3
        }
    }
});

/* Nav & Home link scrolling, props to this guy for the good explainer:
    https://howchoo.com/g/yjfjmty1zjb/how-to-animate-scroll-in-jquery
    Maybe I should just use a library or npm to handle this? */

// vars to hold offset coordinates for scoller() - first, the navbar
const $portTop = $(`#portfolio`).offset().top;
const $aboutTop = $(`#aboutme`).offset().top;
const $contactTop = $(`#contact`).offset().top;
// next, the Section h3 headers kind of look like links? why not
const $goPort = $(`#goPort`).offset().top;
const $goAbout = $(`#goAbout`).offset().top;
const $goContact = $(`#goContact`).offset().top;

// click listeners that pass vars to scroller()
$(`#portTop`).click({ param: $portTop }, scroller);
$(`#aboutTop`).click({ param: $aboutTop }, scroller);
$(`#contactTop`).click({ param: $contactTop }, scroller);
// delegate listeners to the headers - this feels like overkill?
$(`body`).delegate(`#goPort`, `click`, { param: $goPort }, scroller);
$(`body`).delegate(`#goAbout`, `click`, { param: $goAbout }, scroller);
$(`body`).delegate(`#goContact`, `click`, { param: $goContact }, scroller);
// .scrollUp is on each tiny home link - scroll to top
$(`.scrollUp`).click({ param: 0 }, scroller);

// scroller() animates to the offset
function scroller(position) {
    $(`html, body`).animate({
        scrollTop: position.data.param
    }, 500);
};

/* Contact Form - Verification of Info, Google Sheets API */

// listener on Contact card Submit calls storeInfo()
$(`#submit-btn`).on(`click`, storeInfo);

// email validator
function validator(email) {
    const valid = /\S+@\S+\.\S+/;
    return valid.test(email);
}

// vars for Google Sheets API
const scriptURL = 'https://script.google.com/macros/s/AKfycbzxivBPk8mDjOYPOqm53FndxzXHx4V-EufqCgyhRZpayYwc_aQ/exec';
const form = document.forms['submit-to-google-sheet'];

// storeInfo() validates info then calls Fetch API to Google Sheets & triggers modal
function storeInfo() {
    event.preventDefault();
    // remove <small>&<span> msgs, in case of multiple clicks, see below
    $(`.try-again`).remove();
    // capture values in vars
    let $contactName = $(`#contact-name`).val();
    let $contactEmail = $(`#contact-email`).val();
    let $contactMsg = $(`#contact-msg`).val();
    // if anything is blank, add a msg to contact card
    if ($contactName === `` || $contactEmail === `` || $contactMsg === ``) {
        $(`#submit-btn`).after(`<small class="try-again">Please complete all fields.</small>`);
    }
    // if validator() doesn't pass, add msg
    else if (!validator($contactEmail)) {
        $(`#submit-btn`).after(`<small class="try-again">Please complete all fields.</small>`);
        $(`#email-help`).append(`<span class="try-again">Is this right?</span>`);
    }
    // once fields are verified
    else {
        // Google Sheets API
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        // this attr triggers Modal
        $(`#submit-btn`).attr(`data-target`, `#thanks-modal`)
        // clear forms after submission
        $(`form`)[0].reset();
        // short timeout to let all these scripts work
        setTimeout(() => {
            // remove trigger attr in case of multiple clicks
            $(`#submit-btn`).removeAttr(`data-target`);
            // remove msgs
            $(`.try-again`).remove();
        }, 200)
    }
};