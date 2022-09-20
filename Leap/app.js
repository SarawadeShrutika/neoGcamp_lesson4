var btn_action=document.querySelector("#btn_transfer");
var Txt_area=document.querySelector("#Txt_translate");
var txt_out=document.querySelector("#txt_output");
var btn_clear=document.querySelector("#btn_clear");

btn_action.addEventListener("click",function clickEventHandler(){
    if(Txt_area.value%4==0)
    {
        txt_out.innerText="It is a LEAP YEAR";
    }else{
        txt_out.innerText="It is a Not a LEAP YEAR";
    }
    
})

btn_clear.addEventListener("click",function clear(){
    Txt_area.value='';
    txt_out.value='';
})

