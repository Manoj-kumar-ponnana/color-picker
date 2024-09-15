function myReset(){
    let textArea =document.getElementById("main_input");
    textArea.value='';
    textArea.style.background='inherit';
    textArea.style.fontFamily='inherit';
    textArea.style.color='inherit';
}
let inputBg=document.getElementById('main_input').style.backgroundColor;
let inputFont=document.getElementById('main_input').style.fontFamily;
let inputFontColor=document.getElementById('main_input').style.color;

document.getElementById("color_holder").addEventListener("click", (event) => {
    document.getElementById('main_input').style.backgroundColor=`${event.target.style.backgroundColor}`
});

document.getElementById("color_holder2").addEventListener("click", (event) => {
    document.getElementById('main_input').style.color=`${event.target.style.backgroundColor}`
});

document.getElementById("fonts_holder").addEventListener("click", (event) => {
    document.getElementById('main_input').style.fontFamily=`${event.target.style.fontFamily}`
});

function customColor1(){
    document.getElementById('main_input').style.backgroundColor=document.getElementById('custom_color_1').value
}
function customColor2(){
    document.getElementById('main_input').style.color=document.getElementById('custom_color_2').value
}
// function bgRed(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb1').style.backgroundColor
// }
// function bgDarkRed(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb2').style.backgroundColor
// }
// function bgOrange(){
//     inputBg=document.getElementById('boxb3').style.backgroundColor
//     return inputBg
// }
// function bgCNF(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb4').style.backgroundColor
// }
// function bgBlue(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb5').style.backgroundColor
// }
// function bgAqua(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb6').style.backgroundColor
// }
// function bgCyan(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb7').style.backgroundColor
// }
// function bgSlateBlue(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb8').style.backgroundColor
// }
// function bgBV(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb9').style.backgroundColor
// }
// function bgV(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb10').style.backgroundColor
// }
// function bgM(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb11').style.backgroundColor
// }
// function bgL(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb12').style.backgroundColor
// }
// function bgP(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb13').style.backgroundColor
// }
// function bgHP(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb14').style.backgroundColor
// }
// function bgG(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb15').style.backgroundColor
// }
// function bgGY(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb16').style.backgroundColor
// }
// function bgY(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb17').style.backgroundColor
// }
// function bgGld(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb18').style.backgroundColor
// }
// function bgK(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb19').style.backgroundColor
// }
// function bgGy(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb20').style.backgroundColor
// }
// function bgOG(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb21').style.backgroundColor
// }
// function bgI(){
//     document.getElementById('main_input').style.backgroundColor=document.getElementById('boxb20').style.backgroundColor
// }