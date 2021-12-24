$('.nav ul li').click(function(){
    $(this).addClass("active").siblings().removeClass('active');
})

const tab8tn = document.querySelectorAll('.nav ul li');

const tab = document.querySelectorAll('.tab');

function tabs(panelIndex) {
    tab.forEach(function(node) {
        node.style.display = 'none';
    });
    tab[panelIndex].style.display = 'block';
}
tabs(0);



let bio = document.querySelectorAll('.bio');

function bioText() {
    bio.innerText = bio.innerText.substring(0, 100) + "...";
}
bioText();