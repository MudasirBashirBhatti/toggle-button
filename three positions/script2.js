let checkbox = document.querySelector('input');
let circle = document.querySelector('.circle')
let body = document.querySelector('body');


let myPos = 'left';

const initialFunc =()=>{
    body.style.background='yellow'
    circle.style.transform = 'translateX(50%)'
    console.log('hello')
    myPos = 'middle';
}
const afterFunc =()=>{
    circle.style.transform = 'translateX(100%)'
    body.style.background='orange'
    console.log('oh no')
    myPos = 'right'
}
const lastFunc =()=>{
    circle.style.transform = 'translateX(0%)'
    body.style.background='#001122'
    console.log('oh no')
    myPos = 'left'
}


checkbox.addEventListener('click',()=>{
    if(myPos == 'left'){
        initialFunc();
    }else if(myPos == 'middle'){
        afterFunc();
    }else if(myPos =='right'){
        lastFunc()
    }
})