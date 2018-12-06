
$(document).ready(function() {

    $('#sendMessageInput').on('keypress', function(e){

    if (e.which == 13) {

      var messaggioinserito = $('#sendMessageInput').val();
      console.log(messaggioinserito);

      var contenitorenuovomessaggio = $('.template .green_message').clone();
      contenitorenuovomessaggio.text(messaggioinserito);

      contenitorenuovomessaggio.children('.time').text()

      var clearfix = $('.template .clearfix').clone();
      console.log(contenitorenuovomessaggio);

      var hour = new Date();

      $('.main_content').append(contenitorenuovomessaggio);

      $('.main_content').append(clearfix);

      $('#sendMessageInput').val('');

      setTimeout(function() {


        var messaggiodirisposta = $('.template .white_message').clone();
        messaggiodirisposta.text();

        var clearfix = $('.template .clearfix').clone();
        console.log(contenitorenuovomessaggio);

        $('.main_content').append(messaggiodirisposta);
        $('.time').text(hour.getHours() + ':' + hour.getMinutes());

        $('.main_content').append(clearfix);

      }, 1500);

    };

  });

  $('#searchContact').on('keyup', function(){

    var cosahascrittolutente = $('#searchContact').val().toLowerCase();
    // console.log(cosahascrittolutente);

    $('.chat').each(function(){

        var listadeicontatti = $(this).find('.chat_text').text().toLowerCase();
        // console.log(listadeicontatti);

        if (listadeicontatti.includes(cosahascrittolutente)) {
          $(this).show();
        }
        else {
          $(this).hide();
        };

    });


  });
  
// // fa apparire nuove conversazioni
//   $('#laura').on('click', function(){
//
//       $('.conversazione').removeClass('nascosta');
//
//   });
// // rimuove conversazioni
//   $('#cancella').on('click', function(){
//
//       $('.conversazione').hide();
//
//   });



});
