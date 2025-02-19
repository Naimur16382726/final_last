const MIN_WITHDRAW_POINTS = 50;
let watchedAdsCount = 0;
let earnedPoints = 0;
let autoAdInterval;

// Simulate user name
document.getElementById("user-name").textContent = "@exampleUser"; 

// Load saved data
if (localStorage.getItem('watchedAdsCount')) {
    watchedAdsCount = parseInt(localStorage.getItem('watchedAdsCount'));
    earnedPoints = parseFloat(localStorage.getItem('earnedPoints'));
    document.getElementById('watched-ads').textContent = watchedAdsCount;
    document.getElementById('earned-points').textContent = earnedPoints.toFixed(2);
}

// Watch Ad Function
function watchAd() {
    if (typeof show_8975809 === 'function') {
        show_8975809().then(() => {
            watchedAdsCount++;
            earnedPoints += 10;
            document.getElementById('watched-ads').textContent = watchedAdsCount;
            document.getElementById('earned-points').textContent = earnedPoints.toFixed(2);
            localStorage.setItem('watchedAdsCount', watchedAdsCount);
            localStorage.setItem('earnedPoints', earnedPoints.toFixed(2));
            updateProgressCircle();
        });
    }
}

// Update Progress Circle
function updateProgressCircle() {
    let percentage = (watchedAdsCount / 10) * 100;
    document.getElementById('ads-progress').textContent = `${percentage}%`;
}

// Auto Ads Start
function startAutoAds() {
    autoAdInterval = setInterval(() => {
        watchAd();
        loadMonetagAd();
    }, 5000);
}

// Stop Auto Ads
function stopAutoAds() {
    clearInterval(autoAdInterval);
}

// Load Monetag Ads
function loadMonetagAd() {
    document.getElementById('monetag-ad').innerHTML = `<script src='//whephiwums.com/vignette.min.js' data-zone='8975809' data-sdk='show_8975809'></script>`;
}

// Withdraw Function
async function showWithdrawForm() {
    let amount = prompt("Enter withdrawal amount:");
    if (amount < MIN_WITHDRAW_POINTS) {
        alert(`Minimum withdrawal is ${MIN_WITHDRAW_POINTS} points.`);
        return;
    }
    if (amount > earnedPoints) {
        alert(`You don't have enough points.`);
        return;
    }
    earnedPoints -= parseFloat(amount);
    localStorage.setItem('earnedPoints', earnedPoints.toFixed(2));
    alert("Withdrawal request sent!");
    await sendWithdrawRequest(`User: @exampleUser\nWithdraw: ${amount} points`);
}

// Send Withdraw Request to Server
async function sendWithdrawRequest(message) {
    try {
        const response = await fetch('/withdraw', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message })
        });
        if (!response.ok) throw new Error('Request failed');
    } catch (error) {
        console.error('Error:', error);
        alert('Withdrawal failed!');
    }
}
