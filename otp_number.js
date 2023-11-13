var numberInput = document.getElementById('number');
var editNumber = document.getElementsByClassName('edit_number')[0];
var numberMessage = document.getElementsByClassName('number_massage')[0];
var accountMassage = document.getElementsByClassName('account_massage')[0];//It work after register number
var otpInput = document.getElementById('otp');
var toggleButton = document.getElementById('toggleButton');
var invalidOtpMessage = document.getElementsByClassName('invalid_otp')[0];
var timeoutOtpMessage = document.getElementsByClassName('timeout_otp')[0];
var resendOtpMessage = document.getElementsByClassName('resend_otp_massage')[0];
var timer = document.getElementsByClassName('timer')[0]; // Get the timer element
var resend_otp = document.getElementsByClassName('resend_otp')[0];
var nextButton = document.getElementsByClassName('next_button')[0];
var sentOtpButton = document.getElementsByClassName('sent_otp_button')[0];

// Hide the selected elements
numberMessage.style.display = 'none';
editNumber.style.display = 'none';
accountMassage.style.display = 'none';//It work after register number
otpInput.style.display = 'none';
toggleButton.style.display = 'none';
invalidOtpMessage.style.display = 'none';
timeoutOtpMessage.style.display = 'none';
resendOtpMessage.style.display = 'none';
nextButton.style.display = 'none';
resend_otp.style.display = 'none';
document.getElementById('number').removeAttribute('readonly');




// Function to generate a random OTP
function generateOTP() {
    const length = 6; // You can adjust the OTP length as needed
    const characters = '0123456789'; // Characters to include in the OTP
    let otp = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        otp += characters[randomIndex];
    }
    return otp;
}


var generatedOTP = generateOTP();
var timerInterval;


function startResendTimer() {
    var seconds = 60;
    timer.textContent = seconds;
    resendOtpMessage.style.display = 'inline';

    timerInterval = setInterval(function () {
        seconds--;
        timer.textContent = seconds;

        if (seconds <= 0) {
            clearInterval(timerInterval);
            timer.textContent = '0';

            resend_otp.style.display = 'inline';

        }
    }, 1000);
}

function resetResendTimer() {
    clearInterval(timerInterval);
    startResendTimer();

}



// Add a click event listener to the "Sent" button
sentOtpButton.addEventListener('click', function () {
    if (numberInput.value.length !== 10 || !/^[0-9]+$/.test(numberInput.value)) {
        numberMessage.style.display = 'inline';
    } else {
        numberMessage.style.display = 'none';
        otpInput.style.display = 'inline';
        toggleButton.style.display = 'inline';
        nextButton.style.display = 'inline';
        sentOtpButton.style.display = 'none';

        editNumber.style.display = 'inline';


        const generatedOTPElement = document.querySelector('.generated-otp');
        generatedOTPElement.style.display = 'inline';
        generatedOTPElement.textContent = `Generated OTP: ${generatedOTP}`;
        // console.log('Generated OTP:', generatedOTP);


        // Show the "Resend OTP" message when "Sent" is clicked
        resendOtpMessage.style.display = 'inline';
        startResendTimer();

        document.getElementById('number').setAttribute('readonly', true);
        numberInput.style.color = "gray";
        numberInput.style.backgroundColor = "gainsboro";


    }
});



// Add a click event listener to the "editNumber" button
editNumber.addEventListener('click', function () {

    document.getElementById('number').removeAttribute('readonly');
    numberInput.style.color = "black";
    numberInput.style.backgroundColor = "white";

    numberMessage.style.display = 'none';
    otpInput.style.display = 'none';
    toggleButton.style.display = 'none';
    nextButton.style.display = 'none';
    sentOtpButton.style.display = 'inline';

    editNumber.style.display = 'none';


    const generatedOTPElement = document.querySelector('.generated-otp');
    generatedOTPElement.style.display = 'none';
    resetResendTimer();
    generatedOTP = generateOTP();


    // Show the "Resend OTP" message when "Sent" is clicked
    resendOtpMessage.style.display = 'none';
    clearInterval(timerInterval);


});


// Add an input event listener to the OTP input field
otpInput.addEventListener('input', function () {
    // Enable the "Next" button when there is any input in the OTP field
    if (otpInput.value.trim() !== '') {
        nextButton.disabled = false;
    } else {
        nextButton.disabled = true;
    }
});


// Add a click event listener to the "Next" button
nextButton.addEventListener('click', function () {

    if (timer.textContent === '0') {
        // Timeout: Unable to log in
        timeoutOtpMessage.style.display = 'inline';
        invalidOtpMessage.style.display = 'none';
        nextButton.disabled = true;

    } else if (otpInput.value !== generatedOTP) {
        // Invalid OTP entered
        invalidOtpMessage.style.display = 'inline';
        nextButton.disabled = true;

    } else {
        // Valid OTP entered, navigate to the next page
        nextButton.disabled = false;
    }
});


resend_otp.addEventListener('click', function () {
    resetResendTimer();
    generatedOTP = generateOTP();

    const generatedOTPElement = document.querySelector('.generated-otp');
    generatedOTPElement.textContent = `Generated OTP: ${generatedOTP}`;
    // console.log('Generated OTP:', generatedOTP);

    invalidOtpMessage.style.display = 'none';
    timeoutOtpMessage.style.display = 'none';
    nextButton.disabled = false;
    resend_otp.style.display = 'none';
});




/***************************************************************** */



document.addEventListener('DOMContentLoaded', function () {
    const otpInput = document.getElementById('otp');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', function () {
        if (otpInput.type === 'password') {
            otpInput.type = 'text';
            toggleButton.textContent = 'Hide';
        } else {
            otpInput.type = 'password';
            toggleButton.textContent = 'Show';
        }
    });
});
