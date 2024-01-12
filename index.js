var data=document.querySelector("form");
var btn=data.querySelectorAll("button");
function fun1(){
    for(var i=0; i<btn.length; i++){
        btn[i].disabled=true;
    }
    document.frm.n.value=''
}
function fun2(){
    for(var i=0; i<btn.length; i++){
        btn[i].disabled=false;
    }
}