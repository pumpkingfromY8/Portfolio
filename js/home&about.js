const aboutButton = document.getElementById("about");
const descriptionButton = document.getElementById("home");
const abouth1 = document.getElementById("abouth1");
const aboutSection = document.getElementById("aboutcontent");
const descriptionh1 = document.getElementById("homeh1");
const descriptionSection = document.getElementById("homecontent");

const about_link = document.getElementById("about_link");
const home_link = document.getElementById("home_link");

aboutButton.addEventListener("click", function () {
    abouth1.style.display = "block";
    aboutSection.style.display = "block";
    descriptionh1.style.display = "none";
    descriptionSection.style.display = "none";

    // nav
    home_link.style.background = "transparent";
    about_link.style.background = "linear-gradient( to right, rgba(26, 22, 14, 0.226), #ff73005d)";

});

descriptionButton.addEventListener("click", function () {
    abouth1.style.display = "none";
    aboutSection.style.display = "none";
    descriptionh1.style.display = "block";
    descriptionSection.style.display = "block";
// nav
    about_link.style.background = "transparent";
    home_link.style.background = "linear-gradient( to right, rgba(26, 22, 14, 0.226), #ff73005d)";
});