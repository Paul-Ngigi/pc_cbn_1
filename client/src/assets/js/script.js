// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');

$('.tab-content').hide();

$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){

  $('#tabs-nav li').removeClass('active');

  $(this).addClass('active');

  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');

  $(activeTab).fadeIn();

  return false;
  
});

$(document).ready(function(){
  $('.partners').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
      arrows: false,
      dots: false,
      pauseOnHover: false,
      responsive: [{
          breakpoint: 768,
          settings: {
              slidesToShow: 4
          }
      }, {
          breakpoint: 520,
          settings: {
              slidesToShow: 3
          }
      }]
  });
});