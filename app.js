// Implemting the counter that starts from 14 days
// The first thing we need to do is set the date we are counting down to

var countDownDate = new Date("Nov 24, 2022 15:37:25").getTime();

// Update the count down every 1 second
let x = setInterval(function() {

    // Get todays date and time
    let now = new Date().getTime();

    // Find the distance between now an the count down date
    let distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector(".day").innerHTML = days;
    document.querySelector(".hour").innerHTML = hours;
    document.querySelector(".minute").innerHTML = minutes;
    document.querySelector(".second").innerHTML = seconds;


    // If the count down is over, write some text 
    if (distance < 0) {
        clearInterval(x);
        
        document.querySelector(".counter").innerHTML = "EXPIRED";
    }
}
, 1000);

