function Click()
{
 document.getElementById("sixthpageimage").src ="Images/Engagement-min.jpg";
 document.getElementById("page61").style.display = "none";
 document.getElementById("page62").style.display = "block";
 var countDownDate = new Date("May 16, 2019 11:00:00").getTime();          
    var x = setInterval(function() {
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    var timer =  days + "days " + hours + "hours "+ minutes + "minutes " + seconds + "seconds ";
    var result = timer.bold();
    result = result.fontcolor("red");
    document.getElementById("demo").innerHTML ="only" + " " + result + " " + "more togo for'Three Knots'";
  
    if (distance < 0) {
      clearInterval(x);
      document.getElementById("demo").innerHTML = "EXPIRED";
    }
  }, 1000);
}
function onClick(){
    document.getElementById("sixthpageimage").src ="Images/Family-min.jpg";
    document.getElementById("sixthpageimage").style.marginTop = "3.5%";
     document.getElementById("page62").style.display = "none";
    document.getElementById("page63").style.display = "block";    
    document.getElementById("sixthpageimage").style.opacity = "0.9"; 
    document.getElementById("marqueepage6").start(); 
    goFinalPage();     
}

function goFinalPage(){
  setTimeout(function(){window.location.href='MarriageFunction7.html'},20000);    
}
  


