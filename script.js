// Variables to store media stream and video elements
let localStream;
let localVideo = document.getElementById("localVideo");
let remoteVideo = document.getElementById("remoteVideo");

// Get user media
function getUserMedia() {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
        .then(stream => {
            localStream = stream;
            localVideo.srcObject = stream;
        })
        .catch(error => {
            console.log("Error accessing user media: " + error);
        });
}

// Start video
document.getElementById("startButton").addEventListener("click", () => {
    getUserMedia();
});

// Stop video
document.getElementById("stopButton").addEventListener("click", () => {
    if (localStream) {
        localStream.getTracks().forEach(track => track.stop());
        localStream = null;
        localVideo.srcObject = null;
    }
});
