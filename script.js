let timeLeft = 10;
const progressBar = document.getElementById('progress-bar');
const secondsSpan = document.getElementById('seconds');

const countdown = setInterval(() => {
  timeLeft--;
  secondsSpan.innerText = timeLeft;
  
  // 更新進度條百分比
  let progressWidth = ((10 - timeLeft) / 10) * 100;
  progressBar.style.width = progressWidth + '%';

  if (timeLeft <= 0) {
    clearInterval(countdown);
    location.reload(); // 自動重新整理
  }
}, 1000);