// init jquery
function main(){
  // get skillset class
  // var $skillset = $('.skillset');

  // hide class skillset
  $('.skillset').hide();
  // add fade in
  $('.skillset').fadeIn(1000);
  // hide projects
  $('.projects').hide();
  // add click functionality to projects button instances. indicates specifc projects that show
  $('.projects-button').on('click',function() {
    $(this).next().slideToggle(400);
    $(this).toggleClass('active');
    $(this).text();
  });
}
$(document).ready(main);
