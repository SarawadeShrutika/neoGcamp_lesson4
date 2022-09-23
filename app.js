var btn_action=document.querySelector("#btn_transfer");
var Txt_area=document.querySelector("#Txt_translate");
var txt_out=document.querySelector("#txt_output");

function server(Text){
    return "https://api.funtranslations.com/translate/hodor.json"+ "?" + "text="+Text;
}

function errorHandler(error){
    console.log("Error Occurred"+error);
    alert("Something wrong with server.Please can you connect after some time!!!");


}
btn_action.addEventListener("click",function clickEventHandler(){
         fetch(server(Txt_area.value)).then(response => response.json())
         .then(json =>txt_out.innerText=json.contents.translated)
         .catch(errorHandler);
})



