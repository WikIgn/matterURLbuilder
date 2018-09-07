function manipulate() {
  var text = document.getElementById('userInput').value
//Launching 3D Showcase
  if(document.getElementById('help0').checked)
    text = text.concat("&help=",document.getElementById('help0').value)
  if(document.getElementById('help1').checked)
    text = text.concat("&help=",document.getElementById('help1').value)
  if(document.getElementById('help2').checked)
    text = text.concat("&help=",document.getElementById('help2').value)
  if(document.getElementById('nt').checked)
    text = text.concat("&nt=1")
  if(document.getElementById('play').checked)
    text = text.concat("&play=1")
  if(document.getElementById('qs').checked)
    text = text.concat("&qs=1")
  if(document.getElementById('ts').value!="-1")
    text = text.concat("&ts=",document.getElementById('ts').value)
//User Interface
  if(document.getElementById('languages').value!="en")
    text = text.concat("&lang=",document.getElementById('languages').value)
  if(document.getElementById('floors').checked)
    text = text.concat("&f=0")
  if(document.getElementById('nozoom').checked)
    text = text.concat("&nozoom=1")
  if(document.getElementById('wh').checked)
    text = text.concat("&wh=0")

//Guided Tours
  if(document.getElementById('guides').checked)
    text = text.concat("&guides=1")
  if(document.getElementById('kb').checked)
    text = text.concat("&kb=1")
  if(document.getElementById('lp').checked)
    text = text.concat("&lp=1")
  if(document.getElementById('mf').checked)
    text = text.concat("&mf=1")
//ST (pauses in tour)
  if(document.getElementById('st').value!=3500)
    text = text.concat("&st=",document.getElementById('st').value)
//Space title
  if(document.getElementById('title0').checked)
    text = text.concat("&title=0")
  if(document.getElementById('title2').checked)
    text = text.concat("&title=2")
//Call to action
  if(document.getElementById('tourcta0').checked)
    text = text.concat("&tourcta=0")
  if(document.getElementById('tourcta2').checked)
    text = text.concat("&tourcta=2")
//Virtual Reality
  if(document.getElementById('vr').checked)
    text = text.concat("&vr=0")
  if(document.getElementById('vrcoll').checked)
    text = text.concat("&vrcoll=1")

  document.getElementById('pageOutput').value = text;
}
