const URL= `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`

let btn = document.querySelector("button");
let input= document.querySelector("input");
let img = document.querySelector('.qrcode img');
console.log(img);

console.log(input);



btn.addEventListener("click", ()=>{

if (input.value.length>0){
img.src=`${URL}${input.value}`;
img.style.height= '200px';
img.style.width= '200px';
img.style.border='1.5px solid #d1d1d1';

console.log(input.value);
}
else {
    img.src='';
    img.style.height= '0px';
    img.style.width= '0px';
    
}

})