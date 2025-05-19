const imageUpload = document.getElementById('imageUpload');
const container = document.getElementById('flipbookContainer');

imageUpload.addEventListener('change', async (e) => {
  const files = Array.from(e.target.files).sort((a, b) => a.name.localeCompare(b.name));

  if (files.length === 0) return;

  // Clear previous
  container.innerHTML = '';

  const imageElements = await Promise.all(files.map(file => loadImage(file)));
  createFlipbook(imageElements);
});

function loadImage(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.onload = () => {
      const img = document.createElement('img');
      img.src = reader.result;
      img.style.width = '100%';
      resolve(img);
    };
    reader.readAsDataURL(file);
  });
}

function createFlipbook(images) {
  const pageFlip = new St.PageFlip(container, {
    width: 550,
    height: 733,
    size: 'stretch',
    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: false
  });

  const pageElements = images.map(img => {
    const div = document.createElement('div');
    div.className = 'page';
    div.appendChild(img);
    return div;
  });

  pageFlip.loadFromImages(pageElements);
}
