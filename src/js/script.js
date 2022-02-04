function calculateArea(){
    var len=parseFloat(document.getElementById("len").value);
    var wid=parseFloat(document.getElementById("wid").value);
    document.getElementById("output").innerHTML=
    `<p>Area is ${(len * wid)} sq.mtr.</p><p>Perimeter is ${(2 * (len + wid))} mtr</p>`;
}

function convertor(){
    let h=parseInt(document.getElementById("len").value);
   
    var res=0;
    var p;
    if(document.getElementsByName('hours')[0].checked){
        res=h*60;
        p="mins";
    }
    if(document.getElementsByName('hours')[1].checked){
        res=h*60*60;
        p="seconds";
    }
    document.getElementById("output").innerHTML=`${h} hours = ${res} ${p}`;
}