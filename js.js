const start = document.querySelector(".start");
const stop = document.querySelector(".stop");
const reset = document.querySelector(".reset");
const time = document.querySelector(".time");
let interval;

let ms = 00;
let s = 00;
let m = 00;
let h = 00;

function starttime(){
        interval = setInterval(() => {
        ms += 1;
        if(ms == 100){
            ms = 00;
            s += 1;
        }else if(s == 60){
            s = 00;
            m += 1;
        }
        else if(m == 60){
            m = 00;
            h += 1;
        }
        let result = `${h}:${m}:${s}:${ms}`
        time.innerHTML = result;
    }, 10);
}
function stops(){
    console.log('hello')
    clearInterval(interval)
}
function resets(){
    location.reload();
}
reset.addEventListener("click", resets)
stop.addEventListener("click",stops)
start.addEventListener("click", starttime)
