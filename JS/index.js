$(document).ready(function(){
    $("nav .tab1").on("click", function(){
        window.scrollTo(0, 1000);
    });
});

$(document).ready(function(){
    $("nav .tab2").on("click", function(){
        window.scrollTo(0, 1900);
    });
});


            var modal = document.getElementById("myModal");
            
            var btn = document.getElementById("myBtn");
            
            var span = document.getElementsByClassName("close")[0];

            var submit = document.getElementById("submit");
            
            btn.onclick = function() {
              modal.style.display = "block";
            }
            
            span.onclick = function() {
              modal.style.display = "none";
            }

            submit.onclick = function() {
              modal.style.display = "none";
            }
            
            window.onclick = function(event) {
              if (event.target == modal) {
                modal.style.display = "none";
              }
            }

            
            function hamburger(x) {
              x.classList.toggle("change");
            }
        



$(".menu").click(function(){
    $(this).find(".menuContent").toggleClass("dropdown")
    $(this).siblings(".menubtn").find(".menuContent").removeClass("dropdown");
  });



