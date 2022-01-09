burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')
 


burger.addEventListener('click', ()=>{
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    
})
function change(){
    var image1 = document.getElementById('food');
    image1.src = "https://images.theconversation.com/files/62738/original/4k2ggtyf-1414161128.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip"
    var image2 = document.getElementById('food2');
    image2.src = "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mh-6-17-19-transformation-ii-social-1560799045.jpg?resize=980:*"
     var image2 = document.getElementById('food3');
    image2.src = "https://media.istockphoto.com/vectors/vector-illustration-representation-team-as-whole-vector-id1143048152?k=20&m=1143048152&s=612x612&w=0&h=LzOjqX3UfaC-Uu8SWN0Dqq4mKi8uw8bvqbNRVhJPkHE="
 
}






const toggle = document.getElementById("Switch Between Themes");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");
/* checks if the theme stored in localStorage is dark
if yes apply the dark theme to the body */
if (theme === "dark") document.body.classList.add("dark");

// event listener stops when the change theme button is clicked
toggle.addEventListener("click", () => {
   document.body.classList.toggle("dark");
   if (theme === "dark") {
     window.localStorage.setItem("theme", "light");
   } else window.localStorage.setItem("theme", "dark");
});

refresh.addEventListener("click", () => {
   window.location.reload();
});

