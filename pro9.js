const hourEL = document.getElementById("hour")
const minutesEL = document.getElementById("minutes")
const secondsEL = document.getElementById("seconds")
const AMPMel = document.getElementById("AMPM")
//
function updateclock() {
     let hour = new Date().getHours()
     let minute = new Date().getMinutes()
    let seconds = new Date().getSeconds()
    let ampm = "am"
    if (hour > 12) {
         hour = hour - 12;
         ampm = "Pm" ;
    }
// we use innerText to change the text
hourEL.innerText = hour 
minutesEL.innerText = minute 
secondsEL.innerText = seconds
//AMPMel, (innerText = ampm );
 AMPMel.innerText = ampm
 setTimeout(()=> {
    updateclock()
},1000)
}
updateclock();