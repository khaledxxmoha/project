  function DarkMode() {
      document.body.classList.toggle("dark");
     document.body.classList.toggle("dark sidenav a");
      document.body.classList.toggle("dark emoj p");


     }
function formdata() {
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var Message = document.getElementById("Message").value;
    var error = document.getElementById("error");
    
    var text ="";

    if (username.length < 4 ) {

        text="please enter valid username";
        error.innerHTML=text;
        return false;
    }
    else if (email.indexOf("@") == -1 ||  email.length < 6) {

        text="please enter valid email";
        error.innerHTML=text;
        return false;

    }

    else if(Message.length < 10){

        text="please enter your Message";
        error.innerHTML=text;
        return false;
    }
}
window.addEventListener("scroll", function () {
    var header = document.querySelector("header")
    header.classList.toggle("sticky", this.window.scrollY > 0)

    
 })
// let a = document.querySelectorAll('a');
// a.forEach(a =>{
//     a.addEventListener('click', function () {
//     a.forEach(a => btn.classList.remove('active'))
//     this.classList.add('active');   
        
//     })
// })
 var item = document.querySelectorAll('nav .sidenav a')
 var item = document.querySelectorAll('nav .sidenave a')



item.forEach(link => {
        link.addEventListener('click',(e)=>{
            indicator(e.target);
        })
})
let span = document.querySelector(".up");
window.onscroll = function () {
if (this.scrollY >= 1800) {
    span.classList.add("show");
}   else{
    span.classList.remove("show");

}
}
span.onclick = function () {
    window.scrollTo({
        top:0,
        behavior:"smooth",
    });
 };
 var resizing = false;
 window.addEventListener('resize', function(){
   if(resizing) return;
   resizing = true;
   (!window.requestAnimationFrame) ? setTimeout(moveNavigation, 300) : window.requestAnimationFrame(moveNavigation);
 });
 window.dispatchEvent(new Event('resize'));//trigger the moveNavigation function
 
 function moveNavigation(){
   var mq = checkMQ();
   if ( mq == 'mobile' && !Util.hasClass(navList.parentNode, 'js-cd-side-nav') ) {
     detachElements();
     sidebar.appendChild(navList);
     sidebar.insertBefore(searchInput, sidebar.firstChild);
   } else if ( mq == 'desktop' && !Util.hasClass(navList.parentNode, 'js-cd-main-header') ) {
     detachElements();
     mainHeader.appendChild(navList);
     mainHeader.insertBefore(searchInput, mainHeader.firstChild.nextSibling);
   }
   resizing = false;
 };
 
 function detachElements() {
   searchInput.parentNode.removeChild(searchInput);
   navList.parentNode.removeChild(navList);
 };
 function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

navbar = document.querySelector(".sidenav").querySelectorAll("ul a");
console.log(navbar)
navbar.forEach(element => {
    element.addEventListener("click", function () {
      navbar.forEach(nav=>nav.classList.remove("active"))
      this.classList.add("active")
      
    })
});

const switchBox = document.querySelector(".sun-moon");

document.querySelector("input").addEventListener("change", (e) => {
    const { checked } = e.target;   
    if (checked) {
        switchBox.classList.add("move");
    } else {
        switchBox.classList.remove("move");
    }
});
navebar = document.querySelector(".sidenave").querySelectorAll(".sidenave ul a");
console.log(navebar)
navebar.forEach(element => {
    element.addEventListener("click", function () {
      navebar.forEach(nave=>nave.classList.remove("active"))
      this.classList.add("active")
      
    })
});