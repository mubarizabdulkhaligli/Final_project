let playButton = document.querySelector('.play-button');
let video = document.querySelector('.hr-video');
let video_div = document.querySelector(".video")


playButton.addEventListener('click', () =>
{
video_div.style.backgroundImage = "none";
playButton.style.display = "none"
video.src += "?autoplay=1";
video.style.opacity = "1"
video.style.visibility = "visible"
});