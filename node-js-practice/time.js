setTimeout(function(){console.log("1초경과");},1000);
setTimeout(function(){console.log("2초경과");},2000);
setTimeout(()=>{console.log("3초경과");},3000);
setTimeout(function(){console.log("5초경과");},5000);
setTimeout(function(){console.log("7초경과");},7000);
const id = setTimeout(()=> {console.log("취소될 함수");},10000);
clearTimeout(id);
setInterval(()=>{console.log("4초마다 호출");},4000);
