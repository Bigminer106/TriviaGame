$(document).ready(() => {
  var score = 0;
  var timer;
  var minutes;
  var seconds;
  var lastCorrectClicked = false;
  var lastIncorrectClicked = false;

  var oneMinute = 60 * 1,
    twoMinutes = 60 * 2,
    fiveMinutes = 60 * 5,
    tenMinutes = 60 * 10,
    display = $('#timer');

  var gameReset = () => {
    $('.correct1').css('background-color', 'white');
    $('.correct2').css('background-color', 'white');
    $('.correct3').css('background-color', 'white');
    $('.correct4').css('background-color', 'white');
    $('.correct5').css('background-color', 'white');
    $('.correct6').css('background-color', 'white');
    $('.correct7').css('background-color', 'white');
    $('.correct8').css('background-color', 'white');
    $('.correct9').css('background-color', 'white');
    $('.correct10').css('background-color', 'white');

    $('.incorrect1').css('background-color', 'white');
    $('.incorrect2').css('background-color', 'white');
    $('.incorrect3').css('background-color', 'white');
    $('.incorrect4').css('background-color', 'white');
    $('.incorrect5').css('background-color', 'white');
    $('.incorrect6').css('background-color', 'white');
    $('.incorrect7').css('background-color', 'white');
    $('.incorrect8').css('background-color', 'white');
    $('.incorrect9').css('background-color', 'white');
    $('.incorrect10').css('background-color', 'white');
    
    score = 0;

    lastCorrectClicked = false;
    lastIncorrectClicked = false;

    alert('You have 60 seconds.  Click "OK" to begin.');
  };

  gameReset();

  var startTimer = (duration, display) => {
    timer = duration, minutes, seconds;
    setInterval(() => {
      minutes = parseInt(timer / 60, 10);
      seconds = parseInt(timer % 60, 10);

      minutes = minutes < 10 ? '0' + minutes : minutes;
      seconds = seconds < 10 ? '0' + seconds : seconds;

      display.text(minutes + ':' + seconds + ' seconds');

      if (--timer <= -1 || lastCorrectClicked == true || lastIncorrectClicked == true) {
        timer = duration;
        clearInterval(timer);
        alert(`Game Over!  Score: ${score}/10`);
        gameReset();
      };
    }, 1000);
  };

  startTimer(oneMinute, display);

  var correctClicked = () => {
    $('.correct1').on('click', () => {
      $('.correct1').css('background-color', 'green');
      score++;
    });
  
    $('.correct2').on('click', () => {
      $('.correct2').css('background-color', 'green');
      score++;
    });
  
    $('.correct3').on('click', () => {
      $('.correct3').css('background-color', 'green');
      score++;
    });
  
    $('.correct4').on('click', () => {
      $('.correct4').css('background-color', 'green');
      score++;
    });
  
    $('.correct5').on('click', () => {
      $('.correct5').css('background-color', 'green');
      score++;
    });
  
    $('.correct6').on('click', () => {
      $('.correct6').css('background-color', 'green');
      score++;
    });
  
    $('.correct7').on('click', () => {
      $('.correct7').css('background-color', 'green');
      score++;
    });
  
    $('.correct8').on('click', () => {
      $('.correct8').css('background-color', 'green');
      score++;
    });
  
    $('.correct9').on('click', () => {
      $('.correct9').css('background-color', 'green');
      score++;
    });
  
    $('.correct10').on('click', () => {
      score++;
      lastCorrectClicked = true;

      $('.correct10').css('background-color', 'green');

      alert('TRICK QUESTION!!  Both Sauron and Morgoth are Dark Lords of Mordor.');
    });
  };

  correctClicked();

  var incorrectClicked = () => {
    $('.incorrect1').on('click', () => {
      $('.incorrect1').css('background-color', 'red');
      $('.correct1').css('background-color', 'green');
    });
  
    $('.incorrect2').on('click', () => {
      $('.incorrect2').css('background-color', 'red');
      $('.correct2').css('background-color', 'green');
    });
  
    $('.incorrect3').on('click', () => {
      $('.incorrect3').css('background-color', 'red');
      $('.correct3').css('background-color', 'green');
    });
  
    $('.incorrect4').on('click', () => {
      $('.incorrect4').css('background-color', 'red');
      $('.correct4').css('background-color', 'green');
    });
  
    $('.incorrect5').on('click', () => {
      $('.incorrect5').css('background-color', 'red');
      $('.correct5').css('background-color', 'green');
    });
  
    $('.incorrect6').on('click', () => {
      $('.incorrect6').css('background-color', 'red');
      $('.correct6').css('background-color', 'green');
    });
  
    $('.incorrect7').on('click', () => {
      $('.incorrect7').css('background-color', 'red');
      $('.correct7').css('background-color', 'green');
    });
  
    $('.incorrect8').on('click', () => {
      $('.incorrect8').css('background-color', 'red');
      $('.correct8').css('background-color', 'green');
    });
  
    $('.incorrect9').on('click', () => {
      $('.incorrect9').css('background-color', 'red');
      $('.correct9').css('background-color', 'green');
    });
  
    $('.incorrect10').on('click', () => {
      lastIncorrectClicked = true;

      $('.incorrect10').css('background-color', 'red');
      $('.correct10').css('background-color', 'green');
    });
  };

  incorrectClicked();
});