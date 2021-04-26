var $slider1 = $("#slider");
var $fill1 = $(".bar .fill");

function setBar() {
	// $fill1.css("width", $slider1.val()*1.954+0.6 + "%");
    $fill1.css("width", $slider1.val()*1.96+2.5 + "%");
}

$slider1.on("input", setBar);

setBar();


var $slider2 = $("#slider2");
var $fill2 = $(".bar2 .fill2");

function setBar2() {
    $fill2.css("width", $slider2.val()*1.96+2.5 + "%");
}

$slider2.on("input", setBar2);

setBar2();


var $slider3 = $("#slider3");
var $fill3 = $(".bar3 .fill3");

function setBar3() {
    $fill3.css("width", $slider3.val()*1.96+2.5 + "%");
}

$slider3.on("input", setBar3);

setBar3();


var $slider4 = $("#slider4");
var $fill4 = $(".bar4 .fill4");

function setBar4() {
    $fill4.css("width", $slider4.val()*1.96+2.5 + "%");
}

$slider4.on("input", setBar4);

setBar4();


var $slider5 = $("#slider5");
var $fill5 = $(".bar5 .fill5");

function setBar5() {
    $fill5.css("width", $slider5.val()*1.96+2.5 + "%");
}

$slider5.on("input", setBar5);

setBar5();


//my code

let points=document.querySelector("#points");

let mySlider1=document.querySelector("#slider");
let mySlider2=document.querySelector("#slider2");
let mySlider3=document.querySelector("#slider3");
let mySlider4=document.querySelector("#slider4");
let mySlider5=document.querySelector("#slider5");

let reduce=document.querySelector("#reduce");

let polyline=document.querySelector("#polyline");

mySlider1.addEventListener("input", function() {
    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";

    if(pointsLeft<10 && pointsLeft>0) {
        points.innerText="0"+pointsLeft;
    }
    else {
    points.innerText=pointsLeft;
    }

    if (pointsLeft<0) {
        reduce.classList.remove("off");
    }
    else if (pointsLeft>=0) {
        reduce.classList.add("off");
    }

    let svalue=parseInt(mySlider1.value);
    let sgraph=svalue*(-16/5)+160;
    polyline.points[0].y=sgraph;
})

mySlider2.addEventListener("input", function() {
    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    if(pointsLeft<10 && pointsLeft>0) {
        points.innerText="0"+pointsLeft;
    }
    else {
    points.innerText=pointsLeft;
    }

    if (pointsLeft<0) {
        reduce.classList.remove("off");
    }
    else if (pointsLeft>=0) {
        reduce.classList.add("off");
    }

    let imvalue=parseInt(mySlider2.value);
    let imgraph=imvalue*(-16/5)+160;
    polyline.points[1].y=imgraph;

})

mySlider3.addEventListener("input", function() {
    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    if(pointsLeft<10 && pointsLeft>0) {
        points.innerText="0"+pointsLeft;
    }
    else {
    points.innerText=pointsLeft;
    }

    if (pointsLeft<0) {
        reduce.classList.remove("off");
    }
    else if (pointsLeft>=0) {
        reduce.classList.add("off");
    }
        
    let ecvalue=parseInt(mySlider3.value);
    let ecgraph=ecvalue*(-16/5)+160;
    polyline.points[2].y=ecgraph;

})

mySlider4.addEventListener("input", function() {
    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    if(pointsLeft<10 && pointsLeft>0) {
        points.innerText="0"+pointsLeft;
    }
    else {
    points.innerText=pointsLeft;
    }

    if (pointsLeft<0) {
        reduce.classList.remove("off");
    }
    else if (pointsLeft>=0) {
        reduce.classList.add("off");
    }

        
    let invalue=parseInt(mySlider4.value);
    let ingraph=invalue*(-16/5)+160;
    polyline.points[3].y=ingraph;

})

mySlider5.addEventListener("input", function() {
    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    if(pointsLeft<10 && pointsLeft>0) {
        points.innerText="0"+pointsLeft;
    }
    else {
    points.innerText=pointsLeft;
    }

if (pointsLeft<0) {
    reduce.classList.remove("off");
}
else if (pointsLeft>=0) {
    reduce.classList.add("off");
}
     
let cvalue=parseInt(mySlider5.value);
let cgraph=cvalue*(-16/5)+160;
polyline.points[4].y=cgraph;

})

//buttons

let student=document.querySelector("#student");
let athlete=document.querySelector("#athlete");
let leader=document.querySelector("#leader");
let actor=document.querySelector("#actor");

student.addEventListener("click", function() {
    mySlider1.value="2";
    setBar();
    mySlider2.value="26";
    setBar2();
    mySlider3.value="3";
    setBar3();
    mySlider4.value="4";
    setBar4();
    mySlider5.value="15";
    setBar5();

    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    points.innerText=pointsLeft;

    let svalue=parseInt(mySlider1.value);
    let sgraph=svalue*(-16/5)+160;
    polyline.points[0].y=sgraph;

    let imvalue=parseInt(mySlider2.value);
    let imgraph=imvalue*(-16/5)+160;
    polyline.points[1].y=imgraph;

    let ecvalue=parseInt(mySlider3.value);
    let ecgraph=ecvalue*(-16/5)+160;
    polyline.points[2].y=ecgraph;

    let invalue=parseInt(mySlider4.value);
    let ingraph=invalue*(-16/5)+160;
    polyline.points[3].y=ingraph;

    let cvalue=parseInt(mySlider5.value);
    let cgraph=cvalue*(-16/5)+160;
    polyline.points[4].y=cgraph;
    
    reduce.classList.add("off");
})

athlete.addEventListener("click", function() {
    mySlider1.value="25";
    setBar();
    mySlider2.value="3";
    setBar2();
    mySlider3.value="2";
    setBar3();
    mySlider4.value="12";
    setBar4();
    mySlider5.value="8";
    setBar5();

    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    points.innerText=pointsLeft;

    let svalue=parseInt(mySlider1.value);
    let sgraph=svalue*(-16/5)+160;
    polyline.points[0].y=sgraph;

    let imvalue=parseInt(mySlider2.value);
    let imgraph=imvalue*(-16/5)+160;
    polyline.points[1].y=imgraph;

    let ecvalue=parseInt(mySlider3.value);
    let ecgraph=ecvalue*(-16/5)+160;
    polyline.points[2].y=ecgraph;

    let invalue=parseInt(mySlider4.value);
    let ingraph=invalue*(-16/5)+160;
    polyline.points[3].y=ingraph;

    let cvalue=parseInt(mySlider5.value);
    let cgraph=cvalue*(-16/5)+160;
    polyline.points[4].y=cgraph;

    reduce.classList.add("off");
})

leader.addEventListener("click", function() {
    mySlider1.value="4";
    setBar();
    mySlider2.value="8";
    setBar2();
    mySlider3.value="2";
    setBar3();
    mySlider4.value="3";
    setBar4();
    mySlider5.value="33";
    setBar5();

    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    points.innerText=pointsLeft;

    let svalue=parseInt(mySlider1.value);
    let sgraph=svalue*(-16/5)+160;
    polyline.points[0].y=sgraph;

    let imvalue=parseInt(mySlider2.value);
    let imgraph=imvalue*(-16/5)+160;
    polyline.points[1].y=imgraph;

    let ecvalue=parseInt(mySlider3.value);
    let ecgraph=ecvalue*(-16/5)+160;
    polyline.points[2].y=ecgraph;

    let invalue=parseInt(mySlider4.value);
    let ingraph=invalue*(-16/5)+160;
    polyline.points[3].y=ingraph;

    let cvalue=parseInt(mySlider5.value);
    let cgraph=cvalue*(-16/5)+160;
    polyline.points[4].y=cgraph;

    reduce.classList.add("off");
})

actor.addEventListener("click", function() {
    mySlider1.value="18";
    setBar();
    mySlider2.value="4";
    setBar2();
    mySlider3.value="3";
    setBar3();
    mySlider4.value="7";
    setBar4();
    mySlider5.value="18";
    setBar5();

    pointsLeft=50-(parseInt($slider1.val())+parseInt($slider2.val())+parseInt($slider3.val())+parseInt($slider4.val())+parseInt($slider5.val()));
    points.innerText="";
    points.innerText=pointsLeft;

    let svalue=parseInt(mySlider1.value);
    let sgraph=svalue*(-16/5)+160;
    polyline.points[0].y=sgraph;

    let imvalue=parseInt(mySlider2.value);
    let imgraph=imvalue*(-16/5)+160;
    polyline.points[1].y=imgraph;

    let ecvalue=parseInt(mySlider3.value);
    let ecgraph=ecvalue*(-16/5)+160;
    polyline.points[2].y=ecgraph;

    let invalue=parseInt(mySlider4.value);
    let ingraph=invalue*(-16/5)+160;
    polyline.points[3].y=ingraph;

    let cvalue=parseInt(mySlider5.value);
    let cgraph=cvalue*(-16/5)+160;
    polyline.points[4].y=cgraph;

    reduce.classList.add("off");
})

