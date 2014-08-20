'use strict';

console.log('\'Allo \'Allo! Popup');

$.ajax({
    url: 'http://www.reddit.com/r/aww.json',
    type: 'GET',
    success:function(data) {

      console.log(data);
      console.log(data.data.children[2].data.title);

      var html = '<div>';

      for (var i=1; i< 10; i++){
        html += '<img src = ' + data.data.children[i].data.thumbnail + '>'+
        '<p>' + data.data.children[i].data.title + '</p>';
      }

      html += '</div>';

      $('.putstuff').html(html);


    }//end function


}); //end .ajax
