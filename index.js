var container2=document.querySelector(".container2");

var container3=document.querySelector(".projectdemo");



container2.addEventListener("mouseover",function(){
    container2.style.backgroundColor="#fddede";
})
container2.addEventListener("mouseout",function(){
    container2.style.backgroundColor="white";
    // document.querySelector(".demobtn").style.boxShadow="3px 3px 3px 5px lightgrey";

})
container3.addEventListener("mouseover",function(){
    container3.style.backgroundColor="#fddede";
})
container3.addEventListener("mouseout",function(){
    container3.style.backgroundColor="white";
})

var icon = document.querySelector(".icon");
      var nav = document.querySelector(".navigation");
      var count = 0;
      icon.addEventListener("click", function () {
        nav.style.display = "block";
        if (count === 0) {
          document.getElementById("navimg").src =
            "https://cdn3.iconfinder.com/data/icons/feather-5/24/x-512.png";
          nav.style.opacity = "1";
          count++;
        } else {
          document.getElementById("navimg").src =
            "https://cdn3.iconfinder.com/data/icons/basic-ui-181/24/Basic_UI_Glyph_Mail-09-512.png";
          nav.style.opacity = "0";
          count--;
        }
      });
      let list = document.querySelectorAll(".list");
      if (window.innerWidth < 785 ) {
        for (i = 0; i < list.length; i++) {
          list[i].addEventListener("click", function () {
            document.getElementById("navimg").src =
              "https://cdn3.iconfinder.com/data/icons/basic-ui-181/24/Basic_UI_Glyph_Mail-09-512.png";
            nav.style.opacity = 0;
          });
        }
      }  
