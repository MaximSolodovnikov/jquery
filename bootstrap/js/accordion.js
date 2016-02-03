$(function(){
   $('.news_content').hide();
   $('.news_title').click(function(){
       $(this).next().slideToggle().siblings('div:visible').slideUp();
   })
});


