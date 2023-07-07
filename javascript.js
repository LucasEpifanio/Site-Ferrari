const homeSection = document.querySelector(".home");

const options = {
    threshold: 1
};

const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const videos = document.querySelectorAll(".video-slide");
            const audio = document.getElementById("audio");

            videos.forEach(video => {
                video.play();
            });

            audio.play();
        } else {
            const videos = document.querySelectorAll(".video-slide");
            const audio = document.getElementById("audio");

            videos.forEach(video => {
                video.pause();
            });

            audio.pause();
        }
    });
};

const observer = new IntersectionObserver(callback, options);
observer.observe(homeSection);

// Restante do código JavaScript fornecido anteriormente
const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");
});

const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".video-slide");
const contents = document.querySelectorAll(".content");

const audio = document.getElementById('audio');
const audioSource = document.getElementById('audio-source');

var sliderNav = function (manual) {
    btns.forEach((btn) => {
        btn.classList.remove("active");
    });

    slides.forEach((slide) => {
        slide.classList.remove("active");
    });

    contents.forEach((content) => {
        content.classList.remove("active");
    });

    btns[manual].classList.add("active");
    slides[manual].classList.add("active");
    contents[manual].classList.add("active");

    btns.forEach((btn, i) => {
        btn.addEventListener("click", () => {
            sliderNav(i);
        });
    });

    switch (manual) {
        case 0:
            audioSource.src = 'audios/audio-1.wav';
            break;
        case 1:
            audioSource.src = 'audios/audio-2.wav';
            break;
        case 2:
            audioSource.src = 'audios/audio-3.wav';
            break;
        case 3:
            audioSource.src = 'audios/audio-4.wav';
            break;
        case 4:
            audioSource.src = 'audios/audio-5.wav';
            break;
        default:
            break;
    }

    audio.load();
    audio.play();
}

window.addEventListener("load", () => {
    sliderNav(0);
});

let audioStarted = false;

function startAudio() {
    if (!audioStarted) {
        audio.play();
        audioStarted = true;
    }
}

document.addEventListener("click", startAudio);

window.addEventListener("beforeunload", () => {
    audio.pause();
});

/*posts*/
$(document).ready(function () {
    $('.filter-item').click(function () {
        const value = $(this).attr('data-filter');
        if (value == 'tudo') {
            $('.post-box').show('1000');
        }
        else {
            $('.post-box')
                .not("." + value)
                .hide('1000');
            $('.post-box')
                .filter("." + value)
                .show('1000');
        }
    });

    $('.filter-item').click(function () {
        $(this).addClass("active-filter").siblings().removeClass("active-filter");
    });
});

/*menu-scroll*/
window.addEventListener("scroll", function(){
    let header = document.querySelector('#header')
    header.classList.toggle('rolagem',window.scrollY > 30)
})




