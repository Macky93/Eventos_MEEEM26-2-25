let maxleft;
let maxTop;
const minLeft = 0;
const minTop = 0;
let timeDelta;
let imgs =[
    "media/img/arboles/arbol1.png",
    "media/img/arboles/arbol2.png",
    "media/img/arboles/arbol3.png",
    "media/img/arboles/arbol4.png",
];
var originalX;
var originalY;
window.onload = function(){
    document.onmousedown = startDrag;
    document.onmouseup = stropDrag;
}

function sensorClick () {
if (Date.now() - timeDelta < 150){
    createPopUp(this);
}
}

function createPopUp(parent){
    let p = document.getElementById("popup");
    if(p){
        p.parentNode.removeChild(p);

    }
    let popup = document.createElement("div");
    popup.id = "popup";
    popup.className = "popup";
    popup.style.top = parent.y - 110 + "px";
    popup.style.top = parent.x - 75 + "px";

    let text = document.getElementsByClassName("map")[0];
    Map.appendChild(popup);

}
function baseOnLoad (){
    var map = document.getElementsByClassName("map")[0];
    var base = document.getElementsByClassName("base")[0];
    maxleft = base.width - 50;
    maxTop = base.Height - 50;

    
    for(let i = 0; i < 6; i++){
        let sensor = document.createElement("img");
        sensor.src = img [i%imgs.length];
        sensor.alt = i;
        sensor.id = i;
        sensor.draggable = true;
        sensor.classList.add("sensor");
        sensor.classList.add("dragme");
        sensor.style.left = `${Math.floor(Math.random() * 900)}px`;
        sensor.style.top = `${Math.floor(Math.random() * 500)}px`;
        sensor.onclick = sensorClick;
        let paren = document.getElementsByClassName("map")[0];
        parent.appendChild(sensor);
    }
}

function startDrag(e){
    timeDelta = Date.now();
     if(!e) var e = window.event;

     if(e.preventDefault) e.preventDefault();
      targ = e.target ? e.target : e.srcElement;

      originalX = targ.style.left;
      originaly = targ.style.top;

      if(!targ.classList.contains('dragme')) return;

      offsetX = e.clientX;
      offsetY = e.clientY;
      coordX = parseInt(targ.style.left);
      coordY = parsetInt(targ.style.top);
      drag = true;
      
      document.onmousemove = dragDiv;
      return false;
    }

    function dragDiv(){
        if(!drag) return;
        if(!e) var e = window.event;

        let newLeft = coordX + e.clientX - offsetX;
        if (newLeft < maxleft && newTop > minTop) targ.style.left = newLeft + 'px';

        let newTop = coordY + e.clientY - offsetY;
        if (newLeft < maxTop && newTop > minTop) targ.style.top = newTop + 'px';
        return
    }

    function stropDrag(){
        if (typeof drag == 'undefined') return;
        if(drag){
            if(Date.now() - timeDelta > 150){
                let p = document.getElementById('popup');
                if(p){
                    p.parentNode.removeChild(p);
                }
            }else{
                targ.style.left = originalX;
                targ.style.top = originalY;
            }
        }
        drag = false;
    }