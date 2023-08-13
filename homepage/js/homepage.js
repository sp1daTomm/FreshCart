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
})
add1.addEventListener('click',()=>{
    sum1.value++;
    sum1.innerHTML = sum1.value;
})


sum2.value=1
sub2.addEventListener('click',()=>{
    sum2.value--;
    sum2.innerHTML = sum2.value;
})
add2.addEventListener('click',()=>{
    sum2.value++;
    sum2.innerHTML = sum2.value;
})


sum3.value=1
sub3.addEventListener('click',()=>{
    sum3.value--;
    sum3.innerHTML = sum3.value;
})
add3.addEventListener('click',()=>{
    sum3.value++;
    sum3.innerHTML = sum3.value;
})


sum4.value=1
sub4.addEventListener('click',()=>{
    sum4.value--;
    sum4.innerHTML = sum4.value;
})
add4.addEventListener('click',()=>{
    sum4.value++;
    sum4.innerHTML = sum4.value;
})


sum5.value=1
sub5.addEventListener('click',()=>{
    sum5.value--;
    sum5.innerHTML = sum5.value;
})
add5.addEventListener('click',()=>{
    sum5.value++;
    sum5.innerHTML = sum5.value;
})




let year = 0;
let month = 0;
let date = 0;
let hour = 0;
let minute = 0;
let second = 0;

function nowTime(){
    NewDate = new Date(); //讀取實際時間
    year = NewDate.getFullYear(); //讀取年份
    month = NewDate.getMonth(); //讀取月份(1月為0)
    date = NewDate.getDate(); //讀取實際為該月幾號
    hour = NewDate.getHours(); //讀取實際小時
    minute = NewDate.getMinutes(); //讀取實際分鐘
    second = NewDate.getSeconds(); //讀取實際秒數
}

// 天數運算邏輯
// 借1年=12個月給月，保證月一定比實際月還大
// 同理借1個月=30天給天，保證天比實際天還大
// 借1天=23小時59分60秒
// 相差天數=(年相差*365天)+(月相差*30天)+日相差 

let realDate1 = document.querySelector('#realDate1');
let hour1 = document.querySelector('#hour1');
let minute1 = document.querySelector('#minute1');
let second1 = document.querySelector('#second1');

setInterval(product1,1000);
function product1(){
    nowTime();
    realDate1 = ((2027 - year) * 365) + ((21 - month) * 30) + (39 - date);
    hour1 = 23 - hour;
    minute1 = 59 - minute;
    second1 = 60 - second;
    realDate1.innerHTML = `${realDate1}Days`;
    hour1.innerText = `${hour1}Hours`;
    minute1.innerText = `${minute1}Mins`;
    second1.innerText = `${second1}Secs`;
    all=[realDate1,hour1,minute1,second1];
    // console.log(all);
    // console.log(realDate1.innerHTML);
}




