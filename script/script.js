$(document).ready(function(){

var player = 1;
var x = 'x';
var o = 'o';


$(".bttn").on('click', function(event){

  var box = $(this);

  if(box.hasClass('x') || box.hasClass('o')){
  }else{
    if(player === 1){
      box.addClass('x');
      if(checkWin('x')){
        alert( "player " + player + " you won!")
      }else{
        player = 2;
      }
    }
    else{
      box.addClass('o');
      if(checkWin('o')){
        alert(player + "you won!")
      }else{
        player = 1;
      }
    }
  }
});

function checkWin(letter){
  if($('#one').hasClass(letter) &&
     $('#two').hasClass(letter) &&
     $('#three').hasClass(letter)){
    return true;
  }
  else if($('#four').hasClass(letter) &&
     $('#five').hasClass(letter) &&
     $('#six').hasClass(letter)){
    return true;
  }
  else if($('#seven').hasClass(letter) &&
     $('#eight').hasClass(letter) &&
     $('#nine').hasClass(letter)){
    return true;
  }
  else if($('#one').hasClass(letter) &&
     $('#four').hasClass(letter) &&
     $('#seven').hasClass(letter)){
    return true;
  }
  else if($('#two').hasClass(letter) &&
     $('#five').hasClass(letter) &&
     $('#eight').hasClass(letter)){
    return true;
  }
  else if($('#three').hasClass(letter) &&
     $('#six').hasClass(letter) &&
     $('#nine').hasClass(letter)){
    return true;
  }
  else if($('#one').hasClass(letter) &&
     $('#five').hasClass(letter) &&
     $('#nine').hasClass(letter)){
    return true;
  }
  else if($('#three').hasClass(letter) &&
     $('#five').hasClass(letter) &&
     $('#seven').hasClass(letter)){
    return true;
  }
  else{
    return false;
  }
}

});
