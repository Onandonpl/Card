const videoButton = document.querySelector(".bio__video");
const video = document.querySelector(".video");
let videoState = "pause";

const handleVideoState = () => {
  console.log(videoState);
  if (videoState === "pause") {
    video.play();
    videoState = "play";
  } else if (videoState === "play") {
    video.load();
    videoState = "pause";
  }
};

videoButton.addEventListener("click", handleVideoState);
