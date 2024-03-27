const html = document.querySelector('html');
const head = html.querySelector('head');
const body = html.querySelector('body');
const rotate = document.createElement('div');

function gDrivePhoto(imgURL) {
  imgURL = imgURL.substring(imgURL.indexOf("/d/") + 3);
  imgURL = imgURL.substring(0, imgURL.indexOf("/"));
  return "https://drive.google.com/thumbnail?id=" + imgURL;
}

function rotateDevice() {
  if (window.innerWidth < window.innerHeight) {
    rotate.style.display = "flex";  
    body.style.display = "none";
  } else {
    rotate.style.display = "none";
    body.style.display = "flex";
  } 
}

// append favicon
var faviconURL =  gDrivePhoto("https://drive.google.com/file/d/1X0hPrFicwEmp2Eqv303dQCPFJnnJHUzH/view"); 
var favicon = document.createElement('link');
favicon.setAttribute('rel', 'icon');
favicon.setAttribute('type', 'image/png');
favicon.setAttribute('href', faviconURL);
head.appendChild(favicon);

// refining rotate div
rotate.setAttribute('id', 'rotate');
html.appendChild(rotate);
window.addEventListener('resize', rotateDevice);
rotateDevice();

console.log("fb: jkpBecaro06");
console.log("ig: @j.kashmir");