nose_X=0;
nose_Y=0;

function preload(){
    nose=loadImage("https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/842636/clown-wig-clipart-xl.png");
}

function setup(){
canvas=createCanvas(350,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,350);
video.hide();
PoseNet=ml5.poseNet(video,modelLoaded);
PoseNet.on("pose", gotPoses);
}

function gotPoses(results){
    if (results.length>0){
        console.log(results);
      console.log("Nose_X= "+results[0].pose.nose.x);
      console.log("Nose_Y= "+results[0].pose.nose.y);

      nose_X=results[0].pose.nose.x-15;
      nose_Y=results[0].pose.nose.y-15;
    }


}

function modelLoaded(){
    console.log("Pose Net has been initialized!");
}

function draw(){
image(video,0,0,350,300);
image(nose, nose_X, nose_Y, 100,30);
}

function snapshot(){
    save("ClownMe.png");
}