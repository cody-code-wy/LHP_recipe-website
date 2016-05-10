var webmode = true;

$(document).ready(function() {
    console.log("Script included!");

    $(".printbutton").click(function() {
      console.log("Switching modes");
      if (webmode) {
        $("link[href=\"style.css\"]").attr('href','print.css')
        $("#PrintMode p").text("Switch to Web Mode")
        $("#PrintMode").attr('id','WebMode')
        webmode = false;
      } else {
        $("link[href=\"print.css\"]").attr('href','style.css')
        $("#WebMode p").text("Switch to Print Mode")
        $("#WebMode").attr('id','PrintMode')
        webmode = true
      }
    })


});
