let milliseconds = 0;
let seconds = 0;
let minutes=0;
let hours= 0;
let timereference ;
let timeshowEle = document.getElementById("timeshow");


document.getElementById("start").onclick = function(){
    timereference = setInterval(updateTime,10);

}


function updateTime(){
    milliseconds = milliseconds+10;
    if(milliseconds === 1000){
        seconds = seconds+1;
        milliseconds = 0;
        if(seconds === 60){
            minutes = minutes+1;
            seconds = 0;
            if(minutes === 60){
                hours = hours+1;
                minutes =0;
            }
        }
    }
    let hrs,mins,secs,millisecs;
    if(hours< 10){
        hrs = '0'+hours
    }else{
        hrs = hours
    }
    if(minutes < 10){
        mins = '0'+minutes
    } else{
        mins= minutes
    }
    if(seconds < 10){
        secs = '0'+seconds
    }else{
        secs = seconds;
    }
    if(milliseconds <10){
        millisecs = '0'+milliseconds
    } else if(milliseconds < 100) {
        millisecs = '00'+milliseconds;
    } else {
        millisecs = milliseconds
    }
    timeshowEle.innerHTML = `${hrs}: ${mins}: ${secs}: ${millisecs}`


}
document.getElementById("pause").onclick = function(){
    clearInterval(timereference)
}
document.getElementById("reset").onclick = function(){
    clearInterval(timereference);
    milliseconds = 0,seconds=0,minutes=0,hours=0;
    timeshowEle.innerHTML = "00 : 00 : 00 : 00";
}