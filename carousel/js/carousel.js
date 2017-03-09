var index = 0;
  document.getElementById("box").onclick = function()
{
    alert("sus");
    this.style.transform="rotateY("+ (-1 * 90 * ++index) +"deg)";
};