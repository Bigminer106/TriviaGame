$(document).ready(() => {

  var question;
  var correctAnswer;
  var incorrectAnswers;
  var questionsAsked = 0;
  var score = 0;

  var timer = setTimeout(() => {
    nextQuestion, 10000
  });

  var endTimer = setTimeout(() => {
    nextQuestion, 3000
});

  var nextQuestion = () => {

    clearTimeout(endTimer);
    
    timer;
    $('#buttons').empty();
    $('#right-wrong').empty();

    var answer1;
    var answer2;
    var answer3;
    var answer4;

    var noGame = $('#card').empty();
    var noAnswers = $('#answers').empty();
    var newMain = $('main');

    var queryURL = 'https://opentdb.com/api.php?amount=10&category=11&difficulty=easy&type=multiple';

    var getQuestion = () => {
      Promise.all([
        $.get(queryURL)
      ])
      .then(results => {
        console.log(results);

        var data = results[0];

        var newData1 = results[1];

        var newData2 = results[2];

        var newData3 = results[3];

        answer1 = data.incorrect_answers;

        answer2 = data.incorrect_answers;

        answer3 = data.correct_answer;

        answer4 = data.incorrect_answers;

        var answerList1 = answer1.toUpperCase();

        var answerList2 = answer2.toUpperCase();

        var answerList3 = answer3.toUpperCase();

        var answerList4 = answer4.toUpperCase();

        var buttons = [
          `<button type='button' class='correct'>${answerList1}</button>`,
          `<button type='button' class='correct'>${answerList2}</button>`,
          `<button type='button' class='correct'>${answerList3}</button>`,
          `<button type='button' class='correct'>${answerList4}</button>`
        ];

        if (score < 10) {
          $('#card').append(`<h2>${randomQuestion}</h2>`);

          var button1Index = Math.floor(Math.random() * buttons.length);

          $('#answers').append(buttons[button1Index]);

          buttons.splice(button1Index, 1);

          var button2Index = Math.floor(Math.random() * buttons.length);

          $('#answers').append(buttons[button2Index]);

          buttons.splice(button2Index, 1);

          var button3Index = Math.floor(Math.random() * buttons.length);

          $('#answers').append(buttons[button3Index]);

          buttons.splice(button3Index, 1);

          var button4Index = Math.floor(Math.random() * buttons.length);

          $('#answers').append(buttons[button4Index]);

          $('#correct').click(() => {
            clearTimeout(timer);

            endTimer;

            $('h3').remove();

            $('#right-wrong').append('<h3>CORRECT!</h3>');

            score++;
            $('#score').text(score);

            nextQuestion();

          });

          $('#incorrect').click(() => {
            clearTimeout(timer);

            endTimer;

            $('h3').remove();

            $('#right-wrong').append('<h3>Incorrect...</h3>');

            nextQuestion();
          });
        } else {
          noGame;
          noAnswers;
          newMain.append('<h3>Game Over!');
        }
      })
    };
    getQuestion();
  };
  nextQuestion();
});