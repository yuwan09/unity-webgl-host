async function startCamera() {
    const videoElement = document.createElement('video');
    videoElement.autoplay = true;
    videoElement.style.width = "100%";
    videoElement.style.position = "absolute";
    videoElement.style.top = "0";
    videoElement.style.left = "0";

    try {
        const stream = await navigator.mediaDevices.getUserMedia({ video: true });
        videoElement.srcObject = stream;
        document.body.appendChild(videoElement);
    } catch (error) {
        console.error("Error accessing camera:", error);
    }
}
startCamera();