// 設定倒數時間 (秒)
const TOTAL_TIME = 15; 
let timeLeft = TOTAL_TIME;

const progressBar = document.getElementById('progress-bar');
const secondsSpan = document.getElementById('seconds');

// 初始化顯示
secondsSpan.innerText = timeLeft;

const countdown = setInterval(() => {
  timeLeft--;
  
  // 安全檢查，避免小數點問題
  if (timeLeft < 0) timeLeft = 0;
  
  // 更新文字
  secondsSpan.innerText = timeLeft;
  
  // 更新進度條百分比 (transition 會讓它平滑)
  let progressWidth = ((TOTAL_TIME - timeLeft) / TOTAL_TIME) * 100;
  progressBar.style.width = progressWidth + '%';

  // 時間到，自動重新整理
  if (timeLeft <= 0) {
    clearInterval(countdown);
    // 加上一點延遲，讓使用者看到進度條跑滿，感覺比較好
    setTimeout(() => {
        location.reload(); 
    }, 500);
  }
}, 1000);