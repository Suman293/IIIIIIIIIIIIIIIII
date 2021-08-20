function setup() {
  canvas = createCanvas(300, 300);
  canvas.position(620,300);
  video = createCapture(VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet" , modelLoaded); //Setup Program 
}

function draw() //classifier id
{
image(video,0,0,300,300);
classifier.classify(video,gotResult);
}

function modelLoaded() //ModelLoaded In console
{
  console.log("ModelLoaded!!");
}

function gotResult(error,result)
{
  if (error) {
    console.log(error)
  }
  else {console.log(result)
    document.getElementById("Object_name").innerHTML=result[0].label;
    document.getElementById("Accuracy_name").innerHTML=result[0].confidence;}
}

//End
