var div = document.querySelector('div');

var mouse = false;

var mouseoffsetX;
var mouseoffsetY;

div.addEventListener('mousedown', (e) => {
    mouse = true;
    mouseoffsetY = e.offsetY;
    mouseoffsetX = e.offsetX;
});

document.body.onmousemove = (e) => {
    if(mouse) {
        div.style.top = e.clientY - mouseoffsetY + 'px';
        div.style.left = e.clientX - mouseoffsetX + 'px';
        div.style.transform = 'translate(0%, 0%)';
    }
};

document.body.addEventListener('mouseup', () => {
    mouse = false;
});

