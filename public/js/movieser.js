function showplay(){
  var x = document.getElementById('idbus').value;
  var data1 = "Titanic";
  var data1p1= "titanic";

  var data2 = "The ring";
  var data2p2 = "The Ring";
  var data2p3 = "The ring 3";
  var data2p4 = "The Ring 3";
  var data2p5 = "El aro";
  if( x == data1 | data1p1){
    document.getElementById('name').innerHTML="Name: Titanic";
    document.getElementById('aval').innerHTML="Available: True";
    document.getElementById('qual').innerHTML="HD: True 1080p";
    document.getElementById('lan').innerHTML="Lang: ESP LAA | EN EUA";
  }
  if( x == data2 | data2p2 |data2p3 | data2p4 | data2p5){
    document.getElementById('name').innerHTML="Name: The Ring";
    document.getElementById('aval').innerHTML="Available: True";
    document.getElementById('qual').innerHTML="HD: True 1080p";
    document.getElementById('lan').innerHTML="Lang: ESP LAA | EN EUA";
  }
  
  
}

function clearcon() {
  // body...
    document.getElementById('name').innerHTML="";
    document.getElementById('aval').innerHTML="";
    document.getElementById('qual').innerHTML="";
    document.getElementById('lan').innerHTML="";
  
}