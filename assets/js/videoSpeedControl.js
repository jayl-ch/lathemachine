document.addEventListener('DOMContentLoaded', () => {
  const operationVideos = document.querySelectorAll('.post.operation .video-container video');

  if (!operationVideos.length) {
    return;
  }

  const speedSteps = [1, 1.25, 1.5, 1.75, 2];

  operationVideos.forEach((video) => {
    const controls = document.createElement('div');
    controls.className = 'video-speed-controls';

    const speedButton = document.createElement('button');
    speedButton.type = 'button';
    speedButton.className = 'video-speed-btn';
    speedButton.textContent = 'Speed: 1x';

    speedButton.addEventListener('click', () => {
      const currentIndex = speedSteps.indexOf(video.playbackRate);
      const nextIndex = currentIndex === -1 || currentIndex === speedSteps.length - 1
        ? 0
        : currentIndex + 1;
      const nextSpeed = speedSteps[nextIndex];

      video.playbackRate = nextSpeed;
      speedButton.textContent = `Speed: ${nextSpeed}x`;
    });

    controls.appendChild(speedButton);
    video.insertAdjacentElement('afterend', controls);
  });
});
