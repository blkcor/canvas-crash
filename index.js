window.addEventListener('load', () => {
    const canvas = document.querySelector('#canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const gradient1 = ctx.createLinearGradient(10, 10, 400, 10);
    gradient1.addColorStop(0, "#00ff00");
    gradient1.addColorStop(1, "#ff0000");
    const gradient2 = ctx.createLinearGradient(10, 10, 400, 10);
    // 从0.5的位置才开始渐变
    gradient2.addColorStop(0.5, "#00ff00");
    gradient2.addColorStop(1, "#ff0000");
    ctx.beginPath()
    ctx.fillStyle = gradient1;
    ctx.fillRect(10, 10, 400, 100);
    ctx.beginPath();
    ctx.fillStyle = gradient2;
    ctx.fillRect(10, 150, 400, 100);
})