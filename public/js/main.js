function dode() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
function validatedata(){
  var user = prompt("Ingrese el codigo token");

  if(user != 140201){
    alert("Error");
    window.location.href="www.google.com";
  }else{
    console.log("passing");
  }
}

function sendbus(){

  var arch1 = 1130;
  var arch2 = "1121A";

  const datainput = document.getElementById('data1').value;

  if(datainput == arch1){
    console.log("Mostrando archivo");
    document.getElementById('nameresult').innerHTML="Name: Wayward Pinnes";
    document.getElementById('coeresult').innerHTML="Code: 1130";
    document.getElementById('typeresult').innerHTML="Type: Video MP4 WEBRip";
   var dataloc = document.getElementById('linkresult').innerHTML="www.solarions1.github.io/drivedata/public/pages/directory/waywardpinnes.html";
    document.getElementById('result-div').style.background="whitesmoke";
    

  }else{
    console.log("null")
  }

}

function cleardata(){
   document.getElementById('nameresult').innerHTML="";
    document.getElementById('coeresult').innerHTML="";
    document.getElementById('typeresult').innerHTML="";
    document.getElementById('linkresult').innerHTML="";
    document.getElementById('result-div').style.background="none";
    document.getElementById('gogolink').innerHTML="Go to link"
}



///////////////////////////directory

function buscarname(){
  var waywardpinnes = "waywardp";
  const inputbu = document.getElementById('buscarname').value;

  if (inputbu == "Wayward Pinnes"){
    window.location.href="https://solarions1.github.io/drivedata/public/pages/waywardpinnes.html";
    console.log("Enviando a" + inputbu);
  }
}
