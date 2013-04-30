wedding_date = new Date("December 31, 2014 16:00:00");
now = new Date();

day_seconds = 24*60*60;
hour_seconds = 60*60;
minute_seconds = 60;

seconds = Math.floor((new Date((wedding_date.getTime() - now.getTime())).getTime())/1000);
days = Math.floor(seconds/day_seconds);
seconds_left = seconds - day_seconds*days;

hours = Math.floor(seconds_left/hour_seconds);
seconds_left = seconds_left - hour_seconds*hours;

minutes = Math.floor(seconds_left/minute_seconds);
seconds = seconds_left - minute_seconds*minutes;
if (days < 10){
days  = '0'+ days};

if (seconds < 10)
{seconds = '0'+ seconds};

if (minutes < 10)
{minutes = '0'+ minutes};

if (hours < 10)
{hours = '0'+ hours};


''+days+':'+hours+':'+minutes+':'+seconds;

      $(function(){
        $('#counter').countdown({
          image: 'img/digits.png',
          startTime: ''+days+':'+hours+':'+minutes+':'+seconds,
                 });

      });