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
    // some bigger, more noticeable arrows
    navText: [`<i class="fa fa-chevron-left"></i>`, `<i class="fa fa-chevron-right"></i>`],
    // Mobile screens show 1 and slideBy 1 at a time, Big screens are 3 & 3
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

/* The stuff below is just a model for now, eventually we're
    going to build something secure to deal with database stuff */

// listener on Submit button, Contact page, calls storeInfo()
$(`#submit-btn`).on(`click`, storeInfo);

// useful global array in the future?
const submissions = [];

// storeInfo() grabs all form values, creates new Objs, push to submissions[]
function storeInfo() {
    // Bootstrap was doing something weird here
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
    // if email doesn't contain @ and ., add msg (not perfect, won't catch "jon.@")
    else if (!($contactEmail.split(``)).includes(`@`) || !($contactEmail.split(``)).includes(`.`)) {
        $(`#submit-btn`).after(`<small class="try-again">Please complete all fields.</small>`);
        $(`#email-help`).append(`<span class="try-again">Is this right?</span>`);
    }
    // once fields are verified
    else {
        // this attr triggers Modal
        $(`#submit-btn`).attr(`data-target`, `#thanks-modal`)
        // create Obj from input
        let Contact = { name: $contactName, email: $contactEmail, msg: $contactMsg };
        // clear forms after submission
        $(`form`)[0].reset();
        // push Obj in array, load in storage
        submissions.push(Contact);
        console.log(submissions)
        localStorage.setItem(`contact`, JSON.stringify(submissions));
        setTimeout(() => {
            // remove trigger attr in case of multiple clicks
            $(`#submit-btn`).removeAttr(`data-target`);
            // remove msgs
            $(`.try-again`).remove();
        }, 200)
    }
};