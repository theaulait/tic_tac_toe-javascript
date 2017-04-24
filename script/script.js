$(document).ready(function(){

var player = 1;
var x = 'X';
var o = 'O';
var count = 0;

$(".bttn").on('click', function(event){
  var box = $(this);
  if(box.hasClass(x) || box.hasClass(o)){
    alert("Already selected. Try another box!");
  }else{
    if(player === 1){
      count ++;
      box.addClass(x);
      box.text(x);
      if(checkWin(x)){
        alert( "player " + player + " you won!")
      }else{
        player = 2;
      }
    }
    else{
      count ++;
      box.addClass(o);
      box.text(o);
      if(checkWin(o)){
        alert("player " + player + " you won!")
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
  else if(count === 9){
    alert('This is a draw. Please restart game.');
  }
  else{
    return false;
  }
}

$('#restart').on('click', function(){
  location.reload();
});

});
