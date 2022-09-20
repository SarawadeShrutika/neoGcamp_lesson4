var btn_action=document.querySelector("#btn_transfer");
var Txt_area=document.querySelector("#Txt_translate");
var txt_out=document.querySelector("#txt_output");

btn_action.addEventListener("click",function clickEventHandler(){
    console.log("Clicked!!");
    txt_out.innerText=Txt_area.value;
    const new_element=document.createElement("div");
    const value=document.createTextNode("OK Bye!!!");
    new_element.appendChild(value);

    const currentDiv=document.getElementById("#txt_output");

    document.body.insertBefore(new_element,currentDiv);

})

