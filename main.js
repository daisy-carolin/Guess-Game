function enter(){

let btn=document.getElementById("btn")
let output=document.getElementById("outputtext");

// let number=[Math.floor(Math.random *100())]

btn.addEventListener('click',function(){
    let number=40;
    let input=document.getElementById('userpoint').value;
    if (input==number){
        output.innerHTML=`You guessed right,your number was ${number}`}

    else if(input<number){
        output.innerHTML="You guessed low!"
    }
    else {
        output.innerHTML="You guessed too high!"
    }
});
}