window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas1');
    const context = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    //initial style  setting
    context.fillStyle = 'red';
    context.strokeStyle = 'yellow';
    context.lineCap = 'round';
    context.lineWidth = 30;
    context.fillRect(50, 50, 100, 100);

    context.beginPath();
    context.moveTo(100, 100);
    context.lineTo(300, 300);
    context.stroke();
})