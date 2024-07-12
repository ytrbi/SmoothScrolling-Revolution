$(document).ready(function() {
    const open = $(".open");
    const close = $(".close");
    const container = $(".container");
    const mybutton = $("#back2top");
  
    open.on("click", function() {
      container.addClass("show-nav");
    });
  
    close.on("click", function() {
      container.removeClass("show-nav");
    });
  
    $(window).scroll(function() {
      if ($(this).scrollTop() > 20) {
        mybutton.css("display", "block");
      } else {
        mybutton.css("display", "none");
      }
    });
  
    $("#back2top").on("click", function() {
      $("html, body").animate({ scrollTop: 0 }, "slow");
      return false;
    });
  });
  