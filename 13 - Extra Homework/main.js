function vidEnd() {
    const video = document.querySelector(".video");
    if (video) {
        video.addEventListener("ended", () => {
            video.classList.add("hidden");
            console.log('vid located');
        });
    } else {
        console.error("Video element with class 'vid' not found.");
    }
}
$(window).scroll(function () {
    $('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});
function openSearch() {
    var elInput = document.querySelector('.form-control')
    elInput.classList.toggle('open')
}

