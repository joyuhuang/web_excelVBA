$(document).ready(function(){
  // ===為縣市區的下拉式選單做樣式==============================
  $('#twzipcode').twzipcode({'css': ['area', 'area']});
  // ===建立WOW物件控制動畫=====================================
  var wow = new WOW({
    boxClass: 'wow',
    animateClass: 'animated',
    offset: 100,
    mobile: true,
    live: true
  });
  new WOW().init();
  // ==="馬上開課"標示顯示設定==================================
  // var headerHeight = $('header').outerHeight();    //偵測header的高度
  var headerHeight = 150;
  function checkNav(){		//假如整份文件捲出的距離>=headerHeight, 讓"馬上開課"標示出現<-由CSS的class來做
    if( $(document).scrollTop() > headerHeight ){
      // console.log($(document).scrollTop());
      // console.log(headerHeight);
      $('nav>a').addClass('fixed');
    }else{
      $('nav>a').removeClass('fixed');
    }
    // 捲動到索取資訊區域時，隱藏此標示
    var targetTop = $('#contact').position().top - $(window).height() / 2;
    // console.log(targetTop);
    if ($(document).scrollTop() > targetTop ){
      $('nav>a').removeClass('fixed');
    }
  }
  checkNav();
  //視窗捲動就執行checkNav()
  $(window).scroll(function(){
    checkNav();
  });

  //點連結時會整頁滑動
  $('nav>a').click(function(){
    $('html,body').animate({scrollTop:$('#contact').position().top},500);
    });
  // ==="馬上開課"標示設定 END ==================================
  // ===課程優點的滑鼠滑入後顯示陰影效果==========================
  $('.advantage>.container>div').hover(function(){
      $(this).find('.circle').addClass("hover_shadow");
    },function(){
      $(this).find('.circle').removeClass("hover_shadow");
  });
});

$(function(){
  $(".wow").attr("data-wow-duration","0.7s");
  // === 刪除線動畫 ==========================
  delAni();
  function delAni() {				
    $(".fault").addClass('del');
    setTimeout(function(){
      $(".fault").removeClass('del');
      setTimeout(delAni, 500);
    },500);
  };
});
