const city = body.querySelector('#city-map');
const swoosh = document.createElement('audio');

const sizes = {
    md: "24px",
    sm: "22px"
}

const pins = {
    cities: gDrivePhoto("https://drive.google.com/file/d/15DX0BWBeWvJKryUCnXyKbKnblG87EMU8/view?usp=drive_link"),
    watch: gDrivePhoto("https://drive.google.com/file/d/14S1OlDVFJZq0Tt9_7O2Bt79h93794IpN/view?usp=drive_link"),
    alabang: gDrivePhoto("https://drive.google.com/file/d/1Bq4kxDgXxJVTzFdDQZhToiRoLe0XVyPT/view?usp=drive_link"),
    diliman: gDrivePhoto("https://drive.google.com/file/d/1xyzIcVbWzXKUjxM90zyg9xmODMFO67ng/view?usp=drive_link"),
    techno: gDrivePhoto("https://drive.google.com/file/d/1ACSGD2VweGMkEhXRC30EvPU_-4jYuTdN/view?usp=drive_link"),
    sdg1: gDrivePhoto("https://drive.google.com/file/d/1OT1EtnQSkziXLvhFTywbzgeQHc5wFEkI/view?usp=drive_link"),
    sdg2: gDrivePhoto("https://drive.google.com/file/d/14pftcefDGfo2kmHI9cl2NuoCL6R3P7W7/view?usp=drive_link"),
    sdg3: gDrivePhoto("https://drive.google.com/file/d/1bDnAB6119krVowxl96MKOjO2CyJfXbZ1/view?usp=drive_link"),
    sdg4: gDrivePhoto("https://drive.google.com/file/d/15JyS2QQ0rr5bQ6FWpdUPH2qT9tF2Ooqy/view?usp=drive_link"),
    sdg5: gDrivePhoto("https://drive.google.com/file/d/1yKwmwMFG615rgbi9n6_VOg-feIpwGrBP/view?usp=drive_link"),
    sdg6: gDrivePhoto("https://drive.google.com/file/d/1br6VdPRA7GMzKv7D-MqhuvCldMNMEoz6/view?usp=drive_link"),
    sdg7: gDrivePhoto("https://drive.google.com/file/d/1MwRoMeMaLAZAG6ine9hhdTBkZLmp1aAX/view?usp=drive_link"),
    sdg8: gDrivePhoto("https://drive.google.com/file/d/1GsC-_2f5Nyxib3NhzxVOOZhioXWklr5Y/view?usp=drive_link"),
    sdg9: gDrivePhoto("https://drive.google.com/file/d/1HFw5QcnkmopfLmOaPpzzCfW1Wfe5R9cO/view?usp=drive_link"),
    sdg10: gDrivePhoto("https://drive.google.com/file/d/1XhmCgdZpue3n_lxofs0ks4_33m9AOhLv/view?usp=drive_link"),
    sdg11: gDrivePhoto("https://drive.google.com/file/d/1_gJ7BHHhgBkl_y48LDzkjvgOnEyhDwIT/view?usp=drive_link"),
    sdg12: gDrivePhoto("https://drive.google.com/file/d/1qfhcus7C1nRIcjVzbSAWOpta0FJfsZRc/view?usp=drive_link"),
    sdg13: gDrivePhoto("https://drive.google.com/file/d/1BexkoIKqnsMWNNbUoAF4R9iLgeItzGBA/view?usp=drive_link"),
    sdg14: gDrivePhoto("https://drive.google.com/file/d/1fkhYsK1A8mW3scWkKqlWn5_RepAH2ky1/view?usp=drive_link"),
    sdg15: gDrivePhoto("https://drive.google.com/file/d/1avbm6JMwl6B-Zs23MkSn-KuOAKLkEbmg/view?usp=drive_link"),
    sdg16: gDrivePhoto("https://drive.google.com/file/d/17KjSb_RHiZRNAQ_O-xuEnkeB5lucyHVP/view?usp=drive_link"),
    sdg17: gDrivePhoto("https://drive.google.com/file/d/1NwJSIAwKv0rZkJU8fB8lHGfr1GNBVHr-/view?usp=drive_link")
}

const assets = {
    airbus: newAsset("airbus", 200, 120, 800, gDrivePhoto("https://drive.google.com/file/d/1SOPHJvbL5MFqqmNUjzkZunxjfHu2lA0b/view?usp=drive_link")),
    apartment: newAsset("apartment", 132, 575, 285, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/apartment.png"),
    bakery: newAsset("bakery", 120, 480, 220, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/bakery.png"),
    balloon: newAsset("balloon", 90, 100, 520, gDrivePhoto("https://drive.google.com/file/d/1G-bYbdqcLjNGRQmLqMYxNyqONJMF282G/view?usp=drive_link")),
    bank: newAsset("bank", 100, 280, 530,  "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/bank.png"),
    blueBldg: newAsset("blue-bldg", 110, 488, 85, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/blue-building.png"),
    cafe: newAsset("cafe", 95, 342, 872, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/cafe.png"),
    corner: newAsset("corner", 95, 380, 1100, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/corner.png"),
    feuAlabang: newAsset("feu-alabang", 190, 350, 340, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/FEU-Building.png"),
    feuDiliman: newAsset("feu-diliman", 210, 410, 620, "https://cdn.glitch.com/1e04e99f-b859-4c58-a916-69aa5ce193aa%2Ftriplets.png"),
    feuTech: newAsset("feu-tech", 105, 485, 495, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/beige.png"),
    helicopter: newAsset("helicopter", 120, 120, 500, gDrivePhoto("https://drive.google.com/file/d/1wC5bM9wi4Acz9jbK3nzpHom9xvo4hApl/view?usp=drive_link")),
    hospital: newAsset("hospital", 160, 470, 820, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/hospital.png"),
    lbBldg: newAsset("lb-bldg", 160, 200, 658, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/LB-building.png"),
    pharmacy: newAsset("pharmacy", 120, 595, 700, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/pharmacy.png"),
    tallest: newAsset("tallest", 95, 280, 990, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/tallest.png"),
    triplets: newAsset("triplets", 150, 190, 365, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/small_triplets.png"),
    whale: newAsset("whale", 50, 780, 980, gDrivePhoto("https://drive.google.com/file/d/13Mcmbt6M1YgPE_UCuQtododaVQ_HxvTM/view?usp=drive_link")),
    white: newAsset("white", 110, 566, 610, "https://cdn.glitch.me/1e04e99f-b859-4c58-a916-69aa5ce193aa/white.png"),
    windmill: newAsset("windmill", 100, 280, 150, gDrivePhoto("https://drive.google.com/file/d/1e75SRPxgm6vkkV-nzATQSSDj3ddtEeS3/view?usp=drive_link")),
    yacht: newAsset("yacht", 132, 780, 420, gDrivePhoto("https://drive.google.com/file/d/1-Wht4G9PLOsddgoIfdTsBK9ff96hIMYT/view?usp=drive_link"))
}

function addAsset(asset, tenantName, tenantPin, directLink) {
    asset.querySelector('.txt').innerHTML = tenantName.toUpperCase();
    asset.querySelector('.pin').style.backgroundImage = "url(" + tenantPin + ")";
    if (asset.getAttribute('id') == "yacht") {
        asset.setAttribute('onclick', 'window.open("' + directLink + '", "_self")');
    } else {
        asset.setAttribute('onclick', 'window.open("' + directLink + '", "_blank")');
    }
    city.appendChild(asset);
}

function newAsset(thisID, thisWidth, thisTop, thisLeft, imgURL) {
    var txt = document.createElement('div');
    txt.classList.add('txt');
    txt.classList.add('overlay');

    var pin = document.createElement('div');
    pin.classList.add('pin');
    pin.classList.add('overlay');

    var sprite = document.createElement('img');
    sprite.setAttribute('src', imgURL);

    var div = document.createElement('div');
    div.setAttribute('id', thisID);
    div.appendChild(sprite);
    div.appendChild(pin);
    div.appendChild(txt);
    div.onmouseover = playSound;
    div.onmouseout = stopSound;
    div.style.width = thisWidth.toString() + "px";
    div.style.top = thisTop.toString() + "px";
    div.style.left = thisLeft.toString() + "px";

    return div;
}

function setTextSize(asset, size) {
    var txt = asset.querySelector('.txt');
    txt.style.fontSize = size;
}

function showLabels() {
    var labels = city.querySelectorAll('.txt');
    for(var i = 0; i < labels.length; i++) {
        labels[i].style.opacity = "1";
        labels[i].style.width = "264px";
    }
    console.log(labels);
}

function playSound(){
    swoosh.play();
}

function stopSound() {
    swoosh.stop();
    swoosh.currentTime = 0;
}

swoosh.setAttribute('src',"https://cdn.glitch.com/546a765c-09a6-48da-a4be-14fc266c8c7f%2Fswoosh2.mp3?v=1614870466456");
body.appendChild(swoosh)