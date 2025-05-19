const container = document.getElementById('flipbookContainer');

const imageFilenames = ['1.png', '2.png'];

window.addEventListener('DOMContentLoaded', () => {
  const images = imageFilenames.map(filename => {
    const img = document.createElement('img');
    img.src = `images/${filename}`;
    img.style.width = '100%';
    const div = document.createElement('div');
    div.className = 'page';
    div.appendChild(img);
    return div;
  });

  const pageFlip = new St.PageFlip(container, {
    width: 550,
    height: 733,
    size: 'stretch',
    maxShadowOpacity: 0.5,
    showCover: false,
    mobileScrollSupport: false
  });

  pageFlip.loadFromImages(images);
});
