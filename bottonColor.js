var Botton = {
  SetBackgroundColor : function (color){
    // document.querySelector('body').style.backgroundColor = color;
    $("body").css("backgroundColor", color);
  },

  SetFontColor : function (color){
    // document.querySelector('body').style.color = color;
    $("body").css("color", color);
  },

  SetLinksColor : function (color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while( i < alist.length){
    // alist[i].style.color = color;
    // i = i + 1;
    // }
    $("a").css('color', color);
  }

}

var Line = {
  SetColorBottom : function (color){
    // document.querySelector('h1').style.borderBottomColor = color;
    $("h1").css("borderBottomColor", color);
  },

   SetColorRight : function (color){
     // document.querySelector('ul').style.borderRightColor = color;
     $("ul").css("borderRightColor", color);
   }
}

function botton(that){
var atb = document.querySelector('body');
    if(that.value === 'Night'){
      Botton.SetBackgroundColor('black');
      Botton.SetFontColor('white');
      that.value = 'Day'
      Botton.SetLinksColor('white');
      Line.SetColorRight('white');
      Line.SetColorBottom('white');
}
    else {
      Botton.SetBackgroundColor('white');
      Botton.SetFontColor('black');
      that.value = 'Night'
      Botton.SetLinksColor('black');
      Line.SetColorRight('black');
      Line.SetColorBottom('black');
    }
}
