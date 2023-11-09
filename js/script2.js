<script>
function playVideo(videoSrc) {
    var videoPlayer = document.getElementById('videoPlayer');
    var videoSource = document.getElementById('videoSource');
    videoSource.src = videoSrc;
    videoPlayer.load();
    videoPlayer.play();
}
</script>