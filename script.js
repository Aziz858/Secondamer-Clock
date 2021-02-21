const link = document.querySelectorAll('.link');
const tab = document.querySelectorAll('.tab');


for (let i = 0; i < link.length; i++) {
    link[i].addEventListener('click', function() {
        for (let ix = 0; ix < link.length; ix++) {
            link[ix].classList.remove('active');
            tab[ix].classList.remove('active-tab');
        }
        tabs(this, tab[i])
    })
}

function tabs(link, tab) {
    link.classList.add('active');
    tab.classList.add('active-tab');
}


setInterval(displayclock, 500);
function displayclock() {
    var time = new Date();
    var hours = time.getHours();
    var minutes = time.getMinutes();
    var seconds = time.getSeconds();
    var am = "AM"
      if (hours > 12) {
          am = "PM"
      }
    if  (hours > 12) {
        hours = hours -12
    } 
    if ( hours == 0) {
        hours = 12
    }  
    if (hours < 10) {
        hours = '0' + hours;
    }
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    if (seconds < 10) {
        seconds = '0' + seconds;
    }


    document.getElementById('clock').innerHTML = hours + ':' + minutes + ':' + seconds + " " + am;
}

//************************ 

const watchBtn = document.querySelector('.stopwatch__btn');
const secondsWatch = document.querySelector('.stopwatch__seconds');
const minutesWatch = document.querySelector('.stopwatch__minutes');
const hoursWatch = document.querySelector('.stopwatch__hours');


watchBtn.addEventListener('click', function() {
    if (this.innerHTML == 'start') {
        this.innerHTML = 'stop';
        let i = 0;
       setTimeout(() => stopWatch(this, i), 1000)
    } 

    else if (this.innerHTML == 'stop') {
        this.innerHTML = 'clear';
    }
    else {
        this.innerHTML = 'start';
        secondsWatch.innerHTML = 0;
        minutesWatch.innerHTML = 0;
        hoursWatch.innerHTML = 0;
    }
})

function  stopWatch(el, i) {

    if (el.innerHTML == 'stop') {
        if (i == 59) {
            i = 0; 

            if (minutesWatch.innerHTML == 59) {
                minutesWatch.innerHTML = 0;
                hoursWatch.innerHTML++;
            }
            else{
                minutesWatch.innerHTML++;
            }
        }
    
        else {
            i++;
            secondsWatch.innerHTML = i;
        }

        setTimeout(() => stopWatch(el, i), 1000);

        
        }     
}

