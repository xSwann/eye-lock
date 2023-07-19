//window.onscroll = function() {stickyNav()};

// Get the navbar
let header=document.querySelector("header")
let main = document.querySelector("main")
let body = document.querySelector("body")


// Get the offset position of the navbar
let sticky = header.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
/*function stickyNav() {
  if (window.scrollY >= sticky) {
    header.classList.add("sticky")
 
    
    
  } else {
    header.classList.remove("sticky");
   
  }
}*/


function smartphoneNavBar() {
  let x = document.querySelector(".nav-items");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

/*html{
  margin-left: 1em;
  margin-top: 1em;
  margin-right: 1em;
}*/
