var players = []; // the controls of the iFrames aren't accessible via DOM
var sections = [];
var ids = [];
var frames;

const header = document.querySelector('#banner-header').children[0];
const container = body.querySelector('#video-container');
const filter = document.createElement('select');
const reload = document.createElement('div');

const banner = {
    mobile: "img/banner-header-mobile.png",
    tablet: "img/banner-header-large.png",
    desktop: "img/banner-header.png"
}

const medals = {
    champ: gDrivePhoto("https://drive.google.com/file/d/1KwUG7NAzJg_C5xLP3sKT-A5lJ1Ork_CL/view?usp=drive_link"),
    first: gDrivePhoto("https://drive.google.com/file/d/1D6SfgOQVROXISv2d5dEtdzxMmFriVrHl/view?usp=drive_link"),
    second: gDrivePhoto("https://drive.google.com/file/d/1VrUndWU7wILB19TbKEJ2RAsbLyPX20wF/view?usp=drive_link"),
    presenter: gDrivePhoto('https://drive.google.com/file/d/1L3RkzmV6JM8_sZWraDDy6ibhDtMZ69vR/view?usp=drive_link'),
    poster: gDrivePhoto('https://drive.google.com/file/d/1TWf596h6MTilE-Fu3qB3AfFOh_ASCq5n/view?usp=drive_link'),
    info: gDrivePhoto('https://drive.google.com/file/d/1i7DyjTgwge3cDGzjVDnI2UMLAI2srqZo/view?usp=drive_link'),
    elim: gDrivePhoto("https://drive.google.com/file/d/1YWoOl_Hcw4FG9oE1EcMSKsu6Y6yPOi0o/view?usp=drive_link")
}

// This pauses the videos 
function preparePlayer(event) {
    setTimeout(function() {
        event.target.pauseVideo(); //pauseVideo() is a YT API function
    }, 16);
    event.target.unMute(); // unMute() is a YT API function
}

// Adds new video to the list
function newVideo(projTitle, src, section) {
    src = src.substring(32);
    var div = document.createElement('div');
    container.appendChild(div);
    div.appendChild(document.createElement('div'));
    div.appendChild(document.createElement('div'));
    div.children[0].setAttribute('id',src);
    div.children[1].classList.add('medal-holder');

    // turns div into iFrame - YT API
    var frame = new YT.Player(src, {
        videoId: src,
        id: src,
        title: projTitle,
        playerVars: {
            playersinline: 1,
            autoplay: 1,
            mute: 1, // Google restricts autoplay with sounds
            rel: 0
        },
        events: {
            onReady: preparePlayer
        }
    });

    players.push(frame);
    sections.push(section);
    ids.push(src);
}

function hoverPlay(index) {
    players[index].playVideo(); // YT API
}

function hoverStop(index) {
    players[index].pauseVideo(); // YT API
}

function restyle() {
    if (window.innerWidth >= 992) {
        header.setAttribute('src', banner.desktop);
    } else if (window.innerWidth >= 768) {
        header.setAttribute('src', banner.tablet);
    } else {
        header.setAttribute('src', banner.mobile);
    }

    var medals = container.querySelectorAll('.medal');
    for (var i = 0; i < medals.length; i++) {
        var width = medals[i].offsetWidth;
        medals[i].style.height = width.toString() + "px";
    }
}

function addOption(value) {
    var option = document.createElement('option');
    option.setAttribute('value', value);
    option.innerHTML = value;
    filter.appendChild(option);
}

// adds the hover-in-out play-pause fx
function applyHover() {
    frames = document.querySelectorAll('iframe');
    for(var i = 0; i < frames.length; i++) {
      frames[i].setAttribute('onmouseover', 'hoverPlay(' + i.toString() + ')');
      frames[i].setAttribute('onmouseout', 'hoverStop(' + i.toString() + ')');
      frames[i].setAttribute('section', sections[i]);
      frames[i].setAttribute('id', ids[i]);
    }

    var options = Array.from(new Set(sections)) ;
    addOption('Filter');
    for (var i = 0; i < options.length; i++) {
        if (options[i] != undefined) {
            addOption(options[i]);
        }
    }

    reload.style.display = "none";
    body.setAttribute('onresize', 'restyle()');
    restyle();
}

function filterFrame() {

    for (var i = 0; i < frames.length; i++) {
        frames[i].classList.remove('hide');
        if (filter.value != "Filter") {
            if (frames[i].getAttribute('section') != filter.value) {
                frames[i].classList.add('hide');
            }
        }
    }
}

function award(id, medalType) {
  var medal = document.createElement('div');
  medal.classList.add('medal');
  medal.style.backgroundImage = 'url(' + medalType + ')';
  setTimeout(function () {
    var width = medal.offsetWidth;
    medal.style.height = width.toString() + "px";
  }, 17);


  var frame = container.children[ids.indexOf(id)];
  frame = frame.querySelector('.medal-holder');
  frame.appendChild(medal);
}

filter.setAttribute('oninput', 'filterFrame()');
var div = document.createElement('div');
div.appendChild(filter);
container.parentElement.insertBefore(div, container);

reload.setAttribute('id', 'reload');
reload.innerHTML = "<div></div><div></div>";
body.appendChild(reload);
