// 漢堡選單切換
function toggleMenu() {
  const menu = document.getElementById('mobileMenu');
  menu.classList.toggle('show');
}

// 背景影片與圖片切換
document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('bgVideo');
  const image = document.getElementById('bgImage');

  if (!video || !image) return;

  video.onended = () => {
    video.classList.add('fade-out');
    image.style.opacity = '1';
  };

  video.onerror = () => {
    video.style.display = 'none';
    image.style.opacity = '1';
  };

  setTimeout(() => {
    if (video.readyState < 2) {
      video.style.display = 'none';
      image.style.opacity = '1';
    }
  }, 5000);
});

