

$(document).ready(function(){

  $('#sendMessageInput').on('keypress', function(event) {

      if (event.which == 13) {

        var newMessage = $(this).val();
        console.log(newMessage);

        $(this).val('');
      };

      $('div.green_message_new').append(newMessage);

      console.log('div.green_message_new');
  });

});
