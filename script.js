document.addEventListener("DOMContentLoaded", function() {
    let users = [
        { name: "User1", points: 100 },
        { name: "User2", points: 200 },
        { name: "User3", points: 150 }
    ];

    let userList = document.getElementById("userList");

    users.forEach(user => {
        let li = document.createElement("li");
        li.textContent = `${user.name}: ${user.points} points`;
        userList.appendChild(li);
    });

    console.log("Mimi App Loaded!");
});
function clickAdCloseButton() {
    setTimeout(() => {
        let closeButton = document.querySelector("img[alt='Close'], button[aria-label='Close'], div[class*='close']");
        
        if (closeButton && closeButton.offsetParent !== null) {
            closeButton.click();
            console.log("Ad closed automatically.");
        } else {
            console.log("Close button not found or not visible.");
        }
    }, 15000);
}

function showAd() {
    if (typeof show_8975809 === 'function') {
        show_8975809().then(() => {
            watchedAdsCount++;
            adsInSession++;
            earnedPoints += 5.50;
            updateDisplay();
            localStorage.setItem('watchedAdsCount', watchedAdsCount);
            localStorage.setItem('earnedPoints', earnedPoints.toFixed(2));


            clickAdCloseButton();

            setTimeout(() => {
                console.log("Ad cycle completed");
            }, 200);
        });
    }
}
