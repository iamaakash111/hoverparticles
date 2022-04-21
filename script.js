const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
const particles =[];

window.addEventListener("resize", function(){
    canvas.height = window.height;
    canvas.width = window.width;
})

const mouse = {
    x:undefined,
    y:undefined
}
canvas.addEventListener("mousemove", function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i<5; i++ ){
        particles.push(new Particle());
    }

})
canvas.addEventListener("touchmove", function(e){
    mouse.x = e.touches[0].screenX;
    mouse.y = e.touches[0].screenY;
    for (let i = 0; i<10; i++ ){
        particles.push(new Particle());
    }
    
})
canvas.addEventListener("click", function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    for (let i = 0; i<10; i++ ){
        particles.push(new Particle());
    }

})

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random()*10 + 1;
        this.speedX = Math.random()*4 - 2; 
        this.speedY = Math.random()*4 - 2;
        this.colorA = Math.random()*255 +1 ; 
        this.colorB = Math.random()*255 +1 ; 
        this.colorC = Math.random()*255 +1 ; 
    }
    draw(){
        ctx.beginPath();
        ctx.fillStyle = `rgb(${this.colorA},${this.colorB},${this.colorC})`
        ctx.arc(this.x, this.y,this.size,0, Math.PI * 2);
        ctx.fill();
    }
    update(){
        this.x+= this.speedX;
        this.y+= this.speedY;
    }
}
function animate() {
    ctx.clearRect(0,0, canvas.width,canvas.height);
    particles.forEach(part => {
        part.update();
        part.draw();

    });

    requestAnimationFrame(animate);
}
animate();
