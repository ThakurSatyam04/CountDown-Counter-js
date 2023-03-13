const timeUp = new Audio('music.mp3');
const endDate = "10 March 2023 23:47";

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input");
const clock = ()=>{
    const end = new Date(endDate);
    const now = new Date(); // Initialy time given by javaScript is in milliseconds.

    // first convert the time difference into seconds.
    const diffTime = (end - now)/1000;
    if(diffTime <= 0){
        // timeUp.play();
        // setInterval(()=>{
        //     timeUp.pause();
        // },10000);
    }
    if(diffTime < 0) 
    return;
    // calculate days
    inputs[0].value = Math.floor(diffTime / 3600 /24);
    // calculate hours
    inputs[1].value = Math.floor((diffTime/3600)%24);
    // calculate minutes
    inputs[2].value = Math.floor((diffTime/60)%60);
    // calculate seconds
    inputs[3].value = Math.floor((diffTime)%60);
}
setInterval(()=>{
    clock();
},1000)



