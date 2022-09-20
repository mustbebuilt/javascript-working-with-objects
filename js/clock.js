(function(){
    console.info("Hello JS") ;

var myNode = document.createElement('div');
document.getElementById("digitalClock").appendChild(myNode);
var updateTime = function() {
    var myDate = new Date();
    myNode.innerHTML = myDate.toTimeString() .substring(0,8);
}
setInterval (updateTime, 1000);
}) ();

var rotSeconds = (seconds * 6) -90;
document.getElementById('secondHand').style.transform = 
'rotate('+rotSeconds+'deg)';