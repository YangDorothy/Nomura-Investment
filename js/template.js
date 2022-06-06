$(function(){
  //mobile btn
    $('.nav__mobile__icon__middline').on('click',function(){
      console.log('in');
      $(this).toggleClass('active');
      $('.nav').toggleClass('nav--active');
      $('body').toggleClass('noscroll');
    });
  //hash
    $('.hash').on('click',function(e){
      e.preventDefault();
      var newhash=$(this).attr("href");
      var thex=$(newhash).offset().top
      console.log(newhash+'/'+thex);//bage
      $('.nav').toggleClass('nav--active');
      $('.nav__mobile__icon__middline').toggleClass('active');
      $('html,body').animate({scrollTop:thex},500);
    });
  //top
    $(window).on('scroll',function(){
      //console.log('top'+$(this).scrollTop()+'/height'+$(window).height());
      if($(this).scrollTop() >= $(this).height()){
        console.log('in');
        $('.botton').fadeIn();
      }else{
        $('.botton').fadeOut();
      }
    });
  });