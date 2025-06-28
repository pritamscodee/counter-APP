let btnInc = document.getElementById("btn-inc")
let btnDec = document.getElementById("btn-dec")
let countbtn=document.getElementById("btn-countbtn")
let displaycount = document.getElementsByClassName("count-display")[0]
let count =0;
let btn123 = document.getElementById("random");

function display(){

      displaycount.textContent = count;
     

}

btnInc.addEventListener('click',function inc(){
    count++;

    display();
    
    
    }
)

btnDec.addEventListener('click',function dec(){
    count--;
    display();
})


document.getElementById("reset").addEventListener('click',function (){
    count = 0;
    display();
})




btn123.addEventListener('click',function (){

    count =Math.floor(Math.random()*10)+10
    console.log(count)
    display()

})