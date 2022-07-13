let container = document.getElementById('container')
let btn = document.getElementById('btn')
let num = document.getElementById('num')
// changing the styles of the container 
container.style.backgroundColor ='red'
container.style.width ='400px'
container.style.height ='500px'
container.style.marginLeft='200px'
// changing the styles the btn
btn.style.height ='70px'
btn.style.marginLeft ='130px'
btn.style.width ='150px'
btn.style.marginTop ='85px'
btn.style.backgroundColor ='green'

//initialising the counter function
let count =0
btn.addEventListener('click',counter)
function counter(){
    return num.textContent= count+= 100
    
    
}
// end of work

