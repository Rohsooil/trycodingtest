const exitHandler = function(code){
	console.log("프로세스가 종료됩니다.");
};
const exceptionHandle = function(err){
	console.log('예외 이벤트가 발생하였습니다.');
};
var count = 0;
const timeOut = function(){
	count = count + 1;
	if(count>5){return;}
	setTimeout(timeOut,1000);
	error.error.error();//의도적으로 예외이벤트를 발생시키는 코드
};
process.on('exit',exitHandler);
process.on('uncaughtException',exceptionHandle)
setTimeout(timeOut,1000);
