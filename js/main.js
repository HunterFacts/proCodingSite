/* Глобальные переменные */

// Переменная отвечающая за перенос значка языка
var mouseOnLang = 0;

/* Управление переносом значков */
$('#lang-reserve')
.on("mousedown", function(e){
	//differenceX = e.pageX-parseInt($('#dialog').css('left'));
  //$('#lang-reserve').css('left',e.pageX + "%");
	mouseOnLang=1;
});

document.onmouseup = function(e){
  if (mouseOnLang == 1){
    let num = Number(document.getElementById("lang-reserve").style.left.replace('%',''));
    if (num >= 50){
      $('#lang-reserve').animate({left: "69.9%"}, 500, 'linear', function(){
				$('.pro-coding-logo-container').html('<div class="pro-coding-text-coding om-font">pro<b style="font-size: 72px;">C</b>oding</div>');
			});
      //.css('left',69.9 + "%");

    }
    else {
      $('#lang-reserve').animate({left: "0%"}, 500, 'linear', function(){
				$('.pro-coding-logo-container').html('<div class="pro-coding-text-pro om-font">pro</div><div class="pro-coding-text-coding om-font">Coding</div>');
			});
      //css('left',0 + "%");
    }
    mouseOnLang=0;
  }
}
document.onmousemove = function(e){
  if (mouseOnLang == 1){
    let num = Number(document.getElementById("lang-reserve").style.left.replace('%',''));
    if (num < 70 & num >= 0){
      $('#lang-reserve').css('left',e.pageX/5 + "%");
    }
    else if (num >= 70){
      $('#lang-reserve').css('left',70 + "%");
    }
    else if (num < 0){
      $('#lang-reserve').css('left',0 + "%");
    }
  }
}
