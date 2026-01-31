const reasons = [
    "Because you make my worst days feel lighter 🤍",
    "Because you are my jaan, my cuttoo, my giggles 💕",
    "Because your smile feels like home 🏡",
    "Because you understand me even when I don't say anything",
    "Because choosing you feels easy, every single day",
    "Because loving you feels peaceful and safe"
];

let currentReasonIndex = 0;

function showReason() {
    const reasonDisplay = document.getElementById('reasonDisplay');
    reasonDisplay.innerHTML = `<p class="reason-text">${reasons[currentReasonIndex]}</p>`;
    currentReasonIndex = (currentReasonIndex + 1) % reasons.length;
}

function showComfort(type) {
    const comfortDisplay = document.getElementById('comfortDisplay');
    let message = '';

    if (type === 'sad') {
        message = "It's okay to feel sad, my love. You don't have to be strong all the time. I'm right here with you, to help you, to heal you 🤍";
    } else if (type === 'stressed') {
        message = "Take a deep breath, my cuttoo. You are doing better than you think, and I'm so proud of you, my jaan you are perfect stay strong 🌸";
    } else if (type === 'missing') {
        message = "No matter the distance, you are always close to my heart. I'm always yours, i love youuuu 🫂";
    }

    comfortDisplay.innerHTML = `<p class="comfort-text">${message}</p>`;
}
