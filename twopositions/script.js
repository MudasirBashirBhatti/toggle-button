let check= document.querySelector('input')
let body= document.querySelector('body');

let myVal = false;

const initialFunc =()=>{
        myVal = false;
        body.style.background='#001122'
        console.log('hello')
}
const afterFunc =()=>{
        myVal = true;
        body.style.background='orange'
        console.log('oh no')
}


check.addEventListener('click',()=>{
    if(myVal){
        initialFunc();
    }else{
        afterFunc();
    }
})