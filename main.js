'use strict'

{
  const btn=document.getElementById('btn');

  btn.addEventListener('click',()=>{
    //const results=['su lucky','lucky','un lucky','happy','bad!','soso..'];
    //const n=Math.floor(Math.random()*results.length);
    //btn.textContent=results[n];
    //btn.textContent=n;
    /*
    switch(n){
      case 0:
      btn.textContent='su lucky';
      break;
      case 1:
      btn.textContent='lucky';
      break;
      case 2:
      btn.textContent='un lucky';
      break;
      default:
      btn.textContent='?';
    }
      */
    const n = Math.random();
    if(n<0.05){
      btn.textContent='su lucky';//5%
    }else if(n<0.2){
      btn.textContent='lucky';//15%
    }else{
      btn.textContent='soso..';
    }
  });

//マウスが押されるとボタンが動く
  btn.addEventListener('mousedown',()=>{
    btn.classList.add('pressed');
  });

  btn.addEventListener('mouseup',()=>{
    btn.classList.remove('pressed');
  });
}
