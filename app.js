var btn_action=document.querySelector("#btn_transfer");
var Txt_area=document.querySelector("#Txt_translate");
var txt_out=document.querySelector("#txt_output");
console.log(Txt_area.value);
btn_action.addEventListener("click",function clickEventHandler(){
    console.log("Clicked!!");
    txt_out.innerText=Txt_area.value;
})


