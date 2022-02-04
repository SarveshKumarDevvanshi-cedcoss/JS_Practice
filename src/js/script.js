function calculateArea(){
    var len=parseFloat(document.getElementById("len").value);
    var wid=parseFloat(document.getElementById("wid").value);
    document.getElementById("output").innerHTML=
    `<p>Area is ${(len * wid)} sq.mtr.</p><p>Perimeter is ${(2 * (len + wid))} mtr</p>`;
}