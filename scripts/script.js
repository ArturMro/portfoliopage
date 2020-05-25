console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');

  addMyEventListeners();
  
  
  
});

function addMyEventListeners(){
    
  // ***************************** Navigation ****************************************
  // When we click on our 'hamburger' navigation has added class 'showHide' that change the height of our navigation
  // Same time 'hamburger' container has added class 'open' that makes each of our bars in 'hamburger' to change its properties that they make 'cross'
  // On next click classes 'showHide' and 'open' are removed and pages apearance looks like before first click
  $('.navIcons').on('click',function(){
    $('nav').toggleClass('showHide');
    $(this).toggleClass('open');
    $('.left').toggleClass('slideFromLeft');
    $('.right').toggleClass('slidefromRight');
  });





}





















