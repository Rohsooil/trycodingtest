console.time("입력하는데 걸린 시간은")
console.log("===주소록에 등록할 정보입니다. ===")
process.argv.forEach(function (item,index){
	if(item=='-name'){
		var name = process.argv[index+1];
		console.log("이름 : ",name);
	}
	if(item=='-age'){
		var age = process.argv[index+1];
		console.log("나이 : ",age);
	}
	if(item=='-tel'){
		var tel = process.argv[index+1];
		console.log("번호 : ",tel);
	}
	
});
console.timeEnd("입력하는데 걸린 시간은");
console.log("입니다.")
