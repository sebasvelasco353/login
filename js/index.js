// everything is done with jquery, maybe later i will use vanilla js
$( document ).ready(function() {
    $(".loader").hide();
});

$("#login_btn").click(function(e) {
    $(".email_row").hide("slow");
    $(".pswd_row").hide("slow");
    $(".loader").show("slow");
    document.getElementById("login-msg").innerHTML = "logging in";
    setTimeout(function(){ 
      document.getElementById("login-msg").innerHTML = "Welcome Back"; 
      $(".loader").hide("slow");
    }, 2500);
      e.preventDefault();
});