var divYes = document.getElementById('yes');
var divNon = document.getElementById('no');
var divTitle = document.getElementById('title');
var divSubTitle = document.getElementById('subtitle')
var body = document.getElementById('body');
var image = document.getElementById('image');

divYes.addEventListener('mouseover', function(e) {
    document.addEventListener('mousemove', function(e) {
    divYes.style.left = (e.pageX - divYes.offsetWidth / 2) + 'px';
    divYes.style.top = (e.pageY - divYes.offsetHeight / 2) + 'px';
    });
});

divYes.addEventListener('click', function(e) {
    divTitle.textContent = "Parfait ^^"
    divSubTitle.textContent = "On se retrouve le 14 février ^^"
    image.src = "../images/amour.gif"
    divYes.style.visibility = "hidden";
    divNon.style.visibility = "hidden";
})

divNon.addEventListener('click', function() {
    var audio = new Audio('../audio/criminal.mp3');
    audio.loop = true;
    audio.play();
    divTitle.textContent = "crève.";

    body.style.backgroundColor = "black";
    divTitle.style.color = "white";
    divTitle.style.fontStyle = "italic";
    divTitle.style.fontWeight = "normal"
    divSubTitle.style.visibility = "hidden";
    divYes.style.visibility = "hidden";
});
