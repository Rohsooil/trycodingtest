const langBtn = document.querySelector('nav > #navigation  #langBtn');
const langList = document.querySelector('nav > #navigation  #box');

langBtn.addEventListener('click',(evt)=>{
    evt.preventDefault();
    const backColor = langBtn.style.backgroundColor;
    if(backColor === 'black'){
        langBtn.style.backgroundColor = 'transparent';
        langList.style.visibility = 'hidden';
    }else if(backColor ==='transparent'||backColor===''){
        langBtn.style.backgroundColor = 'black';
        langList.style.visibility = 'visible';
    }
});