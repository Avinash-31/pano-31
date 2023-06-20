
    // Get the countdown element
    var countdownElement = document.querySelector(".countdown");
    console.log("hello");
    // Get the navbar element
    var navbarElement = document.querySelector(".cd-nav-trigger");

    // Get the final date and time from the data-date attribute
    var finalDateTime = countdownElement.getAttribute("data-date");
    var finalDate = new Date(finalDateTime);

    // Update the countdown every second
    var countdown = setInterval(function () {
        var now = new Date().getTime();
        var distance = finalDate - now;
        // Calculate days, hours, minutes, and seconds
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Display the countdown values
        countdownElement.querySelector(".dday").innerText = days;
        countdownElement.querySelector(".dhour").innerText = hours;
        countdownElement.querySelector(".dmin").innerText = minutes;
        countdownElement.querySelector(".dsec").innerText = seconds;

        // Function to hide the navbar
        function hideNavbar() {
            navbarElement.style.display="default";
        }
        // If the countdown is finished, display a message
        if (distance < 0) {
            clearInterval(countdown);
            countdownElement.innerHTML = "We are live";
            hideNavbar();
        }
    }, 1000);

