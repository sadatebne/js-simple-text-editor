function textInfo(){
    const getTextId= document.getElementById('text');
    return getTextId;
}

function textInfoValue(){
    const getTextId= document.getElementById('text');
    const getTextValue=getTextId.value
    return getTextValue;
}

document.getElementById('btn-bold').addEventListener('click',function(){

textInfo().style.fontWeight = "bold";

})


document.getElementById('btn-italic').addEventListener('click',function(){ 
    textInfo().style.fontStyle = "italic";
    
 })

document.getElementById('btn-underline').addEventListener('click',function(){ 
    textInfo().style.textDecoration = "underline overline";
    ;
 })

 document.getElementById('btn-ali-left').addEventListener('click',function(){ 
    textInfo().style.textAlign = "left";
    
 })

document.getElementById('btn-ali-center').addEventListener('click',function(){ 
    textInfo().style.textAlign = "center"; 
 })

 document.getElementById('btn-ali-right').addEventListener('click',function(){ 
    textInfo().style.textAlign = "right"; 
 })

 document.getElementById('btn-ali-initial').addEventListener('click',function(){ 
    textInfo().style.textAlign = "initial"; 
 })


//  

document.getElementById('btn-upCase').addEventListener('click',function(){ 
    textInfo().style.textTransform = "capitalize";
 })

window.addEventListener('click',function(){ 
    let getColorId=document.getElementById('text-color')
    let getColor=getColorId.value;
    textInfo().style.color = getColor;
 })

 window.addEventListener('click',function(){ 
    
    let getValId=document.getElementById('value-change')
    let length=getValId.value;
   textInfo().style.fontSize = length +'px';

    
 })

