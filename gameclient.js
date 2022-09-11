document.onkeydown=function(e){
     // console.log(e.keyCode);
    if(e.keyCode==38){
        wolf=document.querySelector('.wolff');
        wolf.classList.add('animatewolf')
      
        setTimeout(() => {
            wolf.classList.remove('animatewolf')
            
        }, 700);
    }


    else if(e.keyCode==39){
        wolfp=document.querySelector('.wolff');
        wolfx=parseInt(window.getComputedStyle(wolfp,null).getPropertyValue('left'));
        wolfp.style.left=(wolfx+50)+"px";
       
    }
    else if(e.keyCode==37){
        wolfp=document.querySelector('.wolff');
        wolfx=parseInt(window.getComputedStyle(wolfp,null).getPropertyValue('left'));
        wolfp.style.left=(wolfx-50)+"px";
       
    }

}


// bla=document.querySelector(".blastoise");
// bla.classList.add('animate-dragon');


setInterval(()=>{
    w=document.querySelector('.wolff')
    hit=document.querySelector('.game-over');
    enemy=document.querySelector('.blastoise')

    x1=parseInt(window.getComputedStyle(w,null).getPropertyValue('left'))
    y1=parseInt(window.getComputedStyle(w,null).getPropertyValue('top'))

    x2=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('left'))
   
    y2=parseInt(window.getComputedStyle(enemy,null).getPropertyValue('top'))

    diffX=Math.abs(x1+x2)
    diffY=Math.abs(y1-y2)



    var dist=Math.sqrt((diffX*diffX)+(diffY*diffY))


   
   
   

  console.log(dist)
   

    if(dist<45){
        alert("Game over");
        enemy.classList.remove('animate-dragon')
        w.style.left=20

    }





},600);