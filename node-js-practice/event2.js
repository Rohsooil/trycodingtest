const onUncaughtException = function(error){
	console.log("예외가 발생했군^_^ 이번에만 봐주겠다^_^..!");
	//이벤트를 제거
	process.removeListener('uncaughtException',onUncaughtException);
}
process.on('uncaughtException',onUncaughtException);

const timeOutHandler = function(){
	setTimeout(test,2000);
	error.error.error();
};
setTimeout(timeOutHandler,2000);
