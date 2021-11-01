function showplay(){
  var x = document.getElementById('idbus').value;
  var div1 = document.getElementById('morekd');
  var div2 = document.getElementById('ringplay');
  var div3 = document.getElementById('titan');

  if (x == div1){
    div1.style.dysplay = "block";
  }

  if (x == div2){
    div2.style.dysplay = "block";
  }

  if (x == div3){
    div3.style.dysplay = "block";
  }
}