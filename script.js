$(document).ready(function(){

    /* Get iframe src attribute value i.e. YouTube video url
    and store it in a variable */
    var url = $("#finnVideo").attr('src') + "&autoplay=1";

    /* Assign empty url value to the iframe src attribute when
    modal hide, which stop the video playing */
    $("#myModal").on('hide.bs.modal', function(){
        $("#finnVideo").attr('src', '');
    });

    /* Assign the initially stored url back to the iframe src
    attribute when modal is displayed again */
    $("#myModal").on('show.bs.modal', function(){
        $("#finnVideo").attr('src', url);
    });

    // Share Twitter
    var twitterShare = document.querySelector('[data-js="twitter-share"]');

    twitterShare.onclick = function(e) {
      e.preventDefault();
      var twitterWindow = window.open('https://twitter.com/intent/tweet?text=' + 'I just got Finn - the money tracker you can talk to.  You should too '+ '&url=https://appsto.re/au/DsAhib.i', 'twitter-popup', 'height=350,width=600');
      if(twitterWindow.focus) { twitterWindow.focus(); }
        return false;
      };

});
