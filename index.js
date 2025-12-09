document.addEventListener('DOMContentLoaded', () => {
  const hero = document.getElementById('hero');
  const status = document.getElementById('image-status');

  const imgPath = 'blood-donation-banner.jpg';

  const img = new Image();
  img.src = imgPath;

  img.onload = () => {
    hero.style.backgroundImage = `url('${imgPath}')`;
    hero.classList.remove('hidden');
    status.textContent = ''; // clear loading text
  };

  img.onerror = () => {
    status.textContent = 'Banner image failed to load. Make sure "blood-donation-banner.jpg" is in the same folder as this page and check the filename and extension.';
    
    hero.style.backgroundColor = '#f7c6c6';
    hero.classList.remove('hidden');
  };

  setTimeout(() => {
    if (!img.complete) {
      status.textContent = 'Taking longer than usual to load the banner image…';
    }
  }, 3000);
});
