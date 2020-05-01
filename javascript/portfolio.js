// 各項目にスクロール(上から)
$(function() {
  $("#scroll_h").on("click", function() {
    $("html, body").animate({ 
      scrollTop: $("#item_h").offset().top}, 300);
    return false;
  });
});

$(function() {
  $("#scroll_b").on("click", function() {
    $("html, body").animate({ 
      scrollTop: $("#item_b").offset().top}, 300);
    return false;
  });
});

$(function() {
  $("#scroll_f").on("click", function() {
    $("html, body").animate({ 
      scrollTop: $("#item_f").offset().top}, 300);
    return false;
  });
});

// 各項目にスクロール(下から)
$(function() {
  $("#scroll__h").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#item_h").offset().top}, 300);
    return false;
  });
});

$(function() {
  $("#scroll__b").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#item_b").offset().top}, 300);
    return false;
  });
});

$(function() {
  $("#scroll__f").on("click", function() {
    $("html, body").animate({
      scrollTop: $("#item_f").offset().top}, 300);
    return false;
  });
});

// トップに戻る
$(function() {
  $("#scroll_top").on("click", function() {
    $("html, body").animate({
      scrollTop: 0}, 300);
    return false;
  });
});
