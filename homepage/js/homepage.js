let sum1 = document.querySelector('#sum1');
let sub1 = document.querySelector('#sub1');
let add1 = document.querySelector('#add1');

let sum2 = document.querySelector('#sum2');
let sub2 = document.querySelector('#sub2');
let add2 = document.querySelector('#add2');

let sum3 = document.querySelector('#sum3');
let sub3 = document.querySelector('#sub3');
let add3 = document.querySelector('#add3');

let sum4 = document.querySelector('#sum4');
let sub4 = document.querySelector('#sub4');
let add4 = document.querySelector('#add4');

let sum5 = document.querySelector('#sum5');
let sub5 = document.querySelector('#sub5');
let add5 = document.querySelector('#add5');

sum1.value=1
sub1.addEventListener('click',()=>{
    sum1.value--;
    sum1.innerHTML = sum1.value;
    console.log(sum1.value);
})
add1.addEventListener('click',()=>{
    sum1.value++;
    sum1.innerHTML = sum1.value;
    console.log(sum1.value);
})


sum2.value=1
sub2.addEventListener('click',()=>{
    sum2.value--;
    sum2.innerHTML = sum2.value;
    console.log(sum2.value);
})
add2.addEventListener('click',()=>{
    sum2.value++;
    sum2.innerHTML = sum2.value;
    console.log(sum2.value);
})


sum3.value=1
sub3.addEventListener('click',()=>{
    sum3.value--;
    sum3.innerHTML = sum3.value;
    console.log(sum3.value);
})
add3.addEventListener('click',()=>{
    sum3.value++;
    sum3.innerHTML = sum3.value;
    console.log(sum3.value);
})


sum4.value=1
sub4.addEventListener('click',()=>{
    sum4.value--;
    sum4.innerHTML = sum4.value;
    console.log(sum4.value);
})
add4.addEventListener('click',()=>{
    sum4.value++;
    sum4.innerHTML = sum4.value;
    console.log(sum4.value);
})


sum5.value=1
sub5.addEventListener('click',()=>{
    sum5.value--;
    sum5.innerHTML = sum5.value;
    console.log(sum5.value);
})
add5.addEventListener('click',()=>{
    sum5.value++;
    sum5.innerHTML = sum5.value;
    console.log(sum5.value);
})