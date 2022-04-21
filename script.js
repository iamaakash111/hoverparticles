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
        this.size = Math.random()*25 + 1;
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
        if (this.size>0.2){
            this.size -= 0.2;
        }    
    }
}
function animate() {
    ctx.clearRect(0,0, canvas.width,canvas.height);
    for (let i= 0; i<particles.length;i++){
        particles[i].update();
        particles[i].draw();
        if (particles[i].size<0.2){
            particles.splice(i,1);
            i--;
        }
    }
    ctx.fillStyle ="rgb(71, 23, 14,0.2)";
    ctx.fillRect(0,0,canvas.width,canvas.height);
    ctx.fill();
    ctx.fillStyle="white"
    ctx.lineWidth =1;
    ctx.font = "25px arial";
    ctx.fillText("Hello, I'm Aakash",(canvas.width/2)-100,canvas.height/10);
    ctx.fill();
    ctx.fillStyle="white"
    ctx.lineWidth =1;
    ctx.font = "25px arial";
    ctx.fillText("Click/Move Mouse",(canvas.width/2)-100,canvas.height-25);
    ctx.fill();

    requestAnimationFrame(animate);
}
animate();
