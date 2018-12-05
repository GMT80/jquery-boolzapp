
// apertura jquery
$(document).ready(function(){
// dall'input dell'utente alla pressione del tasto
  $('#sendMessageInput').on('keypress', function(event) {
// evento della pressione del tasto Invio(13)
      if (event.which == 13) {
        // console.log(event.which);
// si recupera il valore dell'input
        var newMessage = $('#sendMessageInput').val();
        // console.log(newMessage);
// si entra nel messaggio vuoto
        var newMessageTemplate =   $('.template .green_message');
        // console.log(newMessageTemplate);
// per pulire i float
        var clearFix = $('.template .clearfix');
// data
        var hour = new Date();
// inserisce il testo inserito dall'utente
        newMessageTemplate.text(newMessage);
// inserisce data in tempo reale
        $('.time').text(hour.getHours() + ':' + hour.getMinutes());

// si appende nel container principale
        $('.main_content').append(newMessageTemplate);
        $('.main_content').append(clearFix);
// si resetta l'input
        $('#sendMessageInput').val('');
// risposta automatica
        setTimeout(function(){

          var answerMessage = $('.template .white_message');

          $('.main_content').append(answerMessage);

        }, 1500);

      };

  });

});
