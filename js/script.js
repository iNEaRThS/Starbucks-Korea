$(document).ready(function(){
	
  $(".menu .head_menu").mouseenter(function(){
    $(".sub").hide();
    $(this).find(".sub").stop().slideDown();
  });

  $(".menu .head_menu").mouseleave(function(){
    $(this).find(".sub").stop().slideUp();
  });
	
  /* notice_show 버튼으로 슬라이드다운 */
  $(".notice_in a").click(function(){
    $(".notice_show").stop().slideToggle();
  });

  /* promotion_show 버튼으로 슬라이드다운 */
  $(".promotion_in").click(function(){
    $(".promotion_show").stop().slideToggle();
  });

  /* 페이드 롤링효과 promotion_show */

  let img=$(".changeimg ul li")
  let oldidx=0;
  let idx=0;
  let img_n=img.length;

  function changeImg(idx){

    if(oldidx!=idx){

      img.eq(oldidx).stop(true,true).fadeOut(300);
      img.eq(idx).stop(true,true).fadeIn(300);
    }
    oldidx=idx;

  }
  function changeAuto(){
    idx++;

    if(idx>img_n-1){
      
      idx=0;
    }
    changeImg(idx);

  }
  
  timer=setInterval(changeAuto,5000);

  $(".starbucks_rewards_in").mouseenter(function(){
    $(this).children(".main_logo").animate({
      top:"20px",
      left:"175px"
      });
    $(".starbucks_rewards_in .main_logo img").animate({
      width:"350px",
      height:"250px"
    });
    $(".starbucks_rewards_in .rewards_text").stop().slideDown();


  });

  $(".starbucks_rewards_in").mouseleave(function(){
    $(this).children(".main_logo").animate({
      top:"135px",
      left:"125px"
      });
    $(".starbucks_rewards_in .main_logo img").animate({
      width:"450px",
      height:"350px"
    });
    $(".starbucks_rewards_in .rewards_text").stop().slideUp();
    
  });

  $(".banner_img").hover(function(){
    $(".banner_btn").css({"display":"block"});
    $(".banner_img ul li:first-child").stop().animate({marginTop:"-600px"},250);
  },function(){
    $(".banner_btn").css({"display":"none"});
    $(".banner_img ul li:first-child").stop(true,true).animate({marginTop:"0px"},250);
  });
    
  $("#pick").mouseenter(function(){
    $("#pick .pick_in").animate({marginLeft:"0px"},2000);
  });

  $("#exp").mouseenter(function(){
    $("#exp .exp_in .car").css({"display":"block"});
    $("#exp .exp_in .car").css({"animation-play-state":"running"});
  });


  sitemap=true;

  $(".sitemap_btn").click(function(){

    if(sitemap){
      $("#sitemap .sitemap_in .sitemap_show").animate({height:"300px"},"fast");
      $("#sitemap .sitemap_in .sitemap_show").show();
      sitemap=false;
    }else{
      $("#sitemap .sitemap_in .sitemap_show").animate({height:"0px"},"fast");
      $("#sitemap .sitemap_in .sitemap_show").hide();
      sitemap=true;
    }

  });


});