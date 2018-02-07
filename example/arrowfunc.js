/* 
let newArr = [1,2,3,4,5].map((v)=>(v*3));

console.log('arrow2',newArr); */

const myObj = {
    runTimeout(){
        setTimeout(()=>{
            console.log(this === window);
            this.printData();
        },2000);
    },
    printData(){
        console.log('hi codesquad!');
    }
}
myObj.runTimeout();