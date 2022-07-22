$('#tab-contents .tab[id != "tab1"]').hide();

$('#tab-menu a').on('click', function(event) {
  $("#tab-contents .tab").hide();
  $("#tab-menu .active").removeClass("active");
  $(this).addClass("active");
  $($(this).attr("href")).show();
  event.preventDefault();
});


// ※$()関数では、特定の属性を持つ要素や属性値を絞り込むことができる。
// 特定の属性を持つ要素のみ取得したいときは、以下のように記述うる。

// $('要素[属性]')
// 属性値が特定の値に等しい要素だけを取得したいときは、以下のように記述する。

// $('要素[属性 = "値"]')