/* Contact Form - Verification of Info, Google Sheets API */

// listener on Contact card Submit calls storeInfo()
// $(`#submit-btn`).on(`click`, storeInfo);
const submit = document.querySelector('#submit-btn');
if (submit) {
    submit.addEventListener('click', storeInfo());
}

// email validator
const validator = (email) => {
    const valid = /\S+@\S+\.\S+/;
    return valid.test(email);
}

// vars for Google Sheets API
const scriptURL = 'https://script.google.com/macros/s/AKfycbzxivBPk8mDjOYPOqm53FndxzXHx4V-EufqCgyhRZpayYwc_aQ/exec';
const form = document.forms['submit-to-google-sheet'];

// storeInfo() validates info then calls Fetch API to Google Sheets & triggers modal
function storeInfo() {
    // event.preventDefault();
    // remove <small>&<span> msgs, in case of multiple clicks, see below
    // $(`.try-again`).remove();
    const tryAgain = document.querySelectorAll('.try-again');
    // tryAgain.remove();
    // capture values in vars
    let contactName = document.querySelector('#contact-name').val();
    let contactEmail = document.querySelector('#contact-email').val();
    let contactMsg = document.querySelector('#contact-msg').val();
    // if anything is blank, add a msg to contact card
    if (contactName === '' || contactEmail === '' || contactMsg === '') {
        submit.after(`<small class="try-again">Please complete all fields.</small>`);
    }
    // if validator() doesn't pass, add msg
    else if (!validator(contactEmail)) {
        submit.after(`<small class="try-again">Please complete all fields.</small>`);
        const emailHelp = document.querySelector('#email-help');
        emailHelp.appendChild(`<span class="try-again">Is this right?</span>`);
    }
    // once fields are verified
    else {
        // Google Sheets API
        fetch(scriptURL, { method: 'POST', body: new FormData(form) })
            .then(response => console.log('Success!', response))
            .catch(error => console.error('Error!', error.message))
        // this attr triggers Modal
        submit.attr('data-target', '#thanks-modal')
        // clear forms after submission
        const formReset = document.querySelector('form');
        formReset[0].reset();
        // short timeout to let all these scripts work
        setTimeout(() => {
            // remove trigger attr in case of multiple clicks
            submit.removeAttr(`data-target`);
            // remove msgs
            tryAgain.remove();
        }, 200)
    }
};

export default storeInfo;