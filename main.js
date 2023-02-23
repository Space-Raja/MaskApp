function draw(){
    image(camera, 0, 0, 300, 250);

model.classify(camera, gotResult);

}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else {
        console.log(results);

document.getElementById("object_name").innerHTML=results[0].label;
document.getElementById("object_accuracy").innerHTML=results[0].confidence.toFixed(2);

    }
}

function setup(){
    canvas = createCanvas(300,250);
    canvas.center();
    camera = createCapture(VIDEO);
    camera.hide();

model = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Oowrhusla/model.json", modelLoaded);

}

function modelLoaded(){
    console.log("Model Loaded!");
}

