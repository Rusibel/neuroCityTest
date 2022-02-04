export default function video() {

    const video = document.querySelector('video'),
    timePicker = document.getElementById('timer');
    console.log(timePicker)
    video.addEventListener('click', ()=>{
        if(video.paused)
          video.play();
        else
          video.pause();
      });

      video.addEventListener('timeupdate', function () {
        timePicker.innerHTML = secondsToTime(video.currentTime);
    }, false);

    function secondsToTime(time){
        console.log(time)
        let fulltime,
            m = Math.floor(time / (60)),
            dm = time % (60),
            s = Math.floor(time),
            ds = dm % 1000,
            mmm = Math.ceil(ds);
        if (mmm === 1000) {
            mmm = 0;
            s = s + 1;
        }
        if (mmm < 10) {
            mmm = '0' + s;
        }
        if (mmm < 100) {
            mmm = '00' + s;
        }
        if (s === 60) {
            s = 0;
            m = m + 1;
        }
        if (s < 10) {
            s = '0' + s;
        }
            fulltime = m + ':' + s + ':' + mmm;

        return fulltime;
    }
}