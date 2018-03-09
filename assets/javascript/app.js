$(document).ready(() => {
  var score = 0;
  $('.correct').on('click', () => {
    $('.correct').css('background-color', 'green');
    score++;
  });
  $('.incorrect').on('click', () => {
    $('.incorrect').css('background-color', 'red');
  });
});