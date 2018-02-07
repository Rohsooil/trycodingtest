/* const healthObj = {
    showHealth : function(){
        console.log('오늘은 운동시간 : ' + this.healthTime);
    }
}

const myHealth = Object.create(healthObj);

myHealth.healthTime = '11:20';
myHealth.name='Roh'; */

/* const myHealth = Object.assign(Object.create(healthObj),{
    name : 'Roh',
    lastTime : '11:20'
});
console.log(myHealth); */

/* const previousObj = {
    name : 'Roh',
    lastTime : '10:20'
};

const myHealth = Object.assign({},previousObj,{"lastTime" : "11:30"});
console.log(myHealth); */

const healthObj = {
    showHealth : function(){
        console.log('오늘 운동시간 : ' + this.healthTime);
    },
    setHealth : function(newTime){
        this.healthTime = newTime;
    }
}

// const myHealth = Object.assign(Object.create(healthObj),{
//     name : 'crong',
//     lastTime : '11:10'
// });

//Object.setPrototypeOf(myHealth,healthObj);
const newobj = Object.setPrototypeOf({
    name : 'crong',
    lastTime : 100
},healthObj)
console.log('myhealth is ',newobj);
console.log(toString.call(newobj.lastTime));