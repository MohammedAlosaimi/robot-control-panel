const run = document.getElementById("start-stop");
const forward = document.getElementById("forward");
const left = document.getElementById("left");
const right = document.getElementById("right");
const backward = document.getElementById("backward");
const arabic = document.getElementById("arabic");
const english = document.getElementById("english");
const image = document.getElementById("image");
const imageLink = "/phpinvisualStudioCode/robot-control-panel/image/";
const forwardLink = ["forward1.png", "forward.png"];
const leftLink = ["left1.png", "left2.png"];
const rightLink = ["right1.png", "right2.png"];
const backwardLink = ["backward1.png", "backward2.png"];
const stopLink = ["stop1.png", "stop2.png", "stop3.png", "stop4.png"];
const startLink = "start.png";

var imageLoop;

// when submit move
function submitMove( move ){
    
    if(run.title == "stop"){
        clearInterval(imageLoop);
        if(move == "forward"){
            imageForward();
        } else if(move == "left"){
            imageLeft();
        } else if(move == "right"){
            imageRight();
        } else {
            imageBackward();
        }
    }
    $.post("/phpinvisualStudioCode/robot-control-panel/back-end/moves.php", {moves: move}, function(data){
        return confirm( data);
    });
}

// when submit the start/stop
function submitRun(){
    var action = run.title;
    clearInterval(imageLoop);

    if(action == "start"){
        imageStart();
        run.title = "stop";
        run.style.border = "3px solid red";
    } else{
        imageStop();
        run.title = "start";
        run.style.border = "3px solid green";
    }

    $.post("/phpinvisualStudioCode/robot-control-panel/back-end/run.php", {run: action}, function(data){
        return confirm( data);
    });
}

//change language
arabic.addEventListener("click", arLanguage);
english.addEventListener("click", enLanguage);

//for arabic language
function arLanguage(){

    document.getElementById("title").innerHTML = "المتحكم بالروبوت";

    forward.innerHTML = "الامام";
    left.innerHTML = "يسار";
    right.innerHTML = "يمين";
    backward.innerHTML = "الوراء";
  
    if(run.title == "start"){
        run.innerHTML = "تشغيل";
        run.style.border = "3px solid green";
    } else{
        run.innerHTML = "ايقاف";
        run.style.border = "3px solid red";
    }

    //hide the (Engilsh) on the top of the page
    arabic.classList.remove("hidden");
    english.classList.add('hidden');
}

//for english language
function enLanguage(){
    document.getElementById("title").innerHTML = "Robot Controller";

    forward.innerHTML = "forward";
    left.innerHTML = "left";
    right.innerHTML = "right";
    backward.innerHTML = "backward";

    if(run.title == "start"){
        run.innerHTML = "start";
        run.style.border = "3px solid green";
    } else {
        run.innerHTML = "stop";
        run.style.border = "3px solid red";
    }

    //hide the(arabic word) on the top of the page
    arabic.classList.remove("hidden");
    english.classList.add("hidden")
}

//Check if the robot is already turned on or not
fetch("/PHPinVisualStudioCode/robot-control-panel/back-end/runInfo.php").then(
    function(response){
        return response.json();
    }
).then(function (response){
    var runInfo = response;

    if(runInfo == "start"){
        imageStart();
        run.title = "stop";
        run.innerHTML = "stop";
        run.style.border = "3px solid red";
    } else{
        imageStop();
        run.title = "start";
        run.innerHTML = "start";
        run.style.border = "3px solid green";
    }
})
.catch(err => {
    console.error(err);
});

function imageStop(){
    image.src = imageLink + "stop1.png";
    image.dataset["num"] = "0"
    imageLoop = setInterval(function(){
        var i = (parseInt(image.dataset["num"]) < stopLink.length -1) ? parseInt(image.dataset["num"]) + 1: 0;
        image.dataset["num"] = i.toString();
        //console.log(i);
        image.src = imageLink + stopLink[i];
    }, 800);
}

function imageStart(){
    image.src = imageLink + "start.png";
    image.dataset["num"] = "0"
}

function imageForward(){
    image.src = imageLink + "forward1.png";
    image.dataset["num"] = "0"
    imageLoop = setInterval(function(){
        var i = (parseInt(image.dataset["num"]) < forwardLink.length -1) ? parseInt(image.dataset["num"]) + 1: 0;
        image.dataset["num"] = i.toString();
        //console.log(i);
        image.src = imageLink + forwardLink[i];
    }, 500);
}

function imageLeft(){
    image.src = imageLink + "left1.png";
    image.dataset["num"] = "0"
    imageLoop = setInterval(function(){
        var i = (parseInt(image.dataset["num"]) < leftLink.length -1) ? parseInt(image.dataset["num"]) + 1: 0;
        image.dataset["num"] = i.toString();
        //console.log(i);
        image.src = imageLink + leftLink[i];
    }, 500);
}

function imageRight(){
    image.src = imageLink + "right1.png";
    image.dataset["num"] = "0"
    imageLoop = setInterval(function(){
        var i = (parseInt(image.dataset["num"]) < rightLink.length -1) ? parseInt(image.dataset["num"]) + 1: 0;
        image.dataset["num"] = i.toString();
        //console.log(i);
        image.src = imageLink + rightLink[i];
    }, 500);
}

function imageBackward(){
    image.src = imageLink + "backward1.png";
    image.dataset["num"] = "0"
    imageLoop = setInterval(function(){
        var i = (parseInt(image.dataset["num"]) < backwardLink.length -1) ? parseInt(image.dataset["num"]) + 1: 0;
        image.dataset["num"] = i.toString();
        //console.log(i);
        image.src = imageLink + backwardLink[i];
    }, 500);
}