status="";
function preload(){
    img=loadImage('images.fridge.jpg');
}
function setup(){
    canvas=createCanvas(640, 420);
    canvas.center();
    objectDetector=ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML="Status: Detecting Object";
}
function modelLoaded(){
    console.log("Model Loaded");
    status=true;
    objectDetector.detect(img, gotResult);
}
function gotResults(error, results){
if(error){
console.error();
}
console.log(results);
objects=results;
}