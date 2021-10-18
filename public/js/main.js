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
    document.getElementById('nameresult').innerHTML="Nombre: Imagen 1";
    document.getElementById('coeresult').innerHTML="Codigo: 1130";
    document.getElementById('typeresult').innerHTML="Tipo: IMAGEN";
    document.getElementById('linkresult').innerHTML="http://www.google.com";
  }else{
    console.log("null")
  }

}

function cleardata(){
   document.getElementById('nameresult').innerHTML="";
    document.getElementById('coeresult').innerHTML="";
    document.getElementById('typeresult').innerHTML="";
    document.getElementById('linkresult').innerHTML="";
}



///////////////////////////directory

function buscarname(){
  var waywardpinnes = "waywardp";
  const inputbu = document.getElementById('buscarname').value;

  if (inputbu == "Wayward Pinnes"){
    window.location.href=""
  }
}