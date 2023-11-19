let firstAnswText = document.querySelector(".rootsTask1Sotution");
let showSolutionRootButt = document.querySelector(".showRootSolutios");

function showSoltRootFunc () {
    firstAnswText.style.opacity = "1";
};

showSolutionRootButt.addEventListener("touchend", showSoltRootFunc(), false);


// let firstAnswTextOpacityState = window.getComputedStyle(firstAnswText, null).getPropertyValue("opacity");
// if (firstAnswTextOpacityState == "0") {
//     firstAnswText.style.opacity = "1";
// } else if (firstAnswTextOpacityState == "1") {
//     firstAnswText.style.opacity = "0";
// };

//document.querySelector(".menuButtImg").onclick = function() {
//    if (document.querySelector(".menu").style.left == "0") {
//        document.querySelector(".menu").style.left = "-90vw";
//    } else {
//        document.querySelector(".menu").style.left = "0";
//    }
//}