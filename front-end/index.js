const run = document.getElementById("start-stop");
const forward = document.getElementById("forward");
const left = document.getElementById("left");
const right = document.getElementById("right");
const backward = document.getElementById("backward");
const arabic = document.getElementById("arabic");
const english = document.getElementById("english");
const image = document.getElementById("image");
const imageLink = "/phpinvisualStudioCode/robot-control-panel/image/";

// when submit move
function submitMove( move ){
    
    // check if the robot in start state then add the gif image
    if(run.title == "stop"){
        if(move == "forward"){
            image.src = imageLink + "forward.gif";
        } else if(move == "left"){
            image.src = imageLink + "left.gif";
        } else if(move == "right"){
            image.src = imageLink + "right.gif";
        } else {
            image.src = imageLink + "backward.gif";
        }
    }
    // stor in the database the move
    $.post("/phpinvisualStudioCode/robot-control-panel/back-end/moves.php", {moves: move}, function(data){
        return confirm( data);
    });
}

// when submit the start/stop
function submitRun(){
    var action = run.title;

    // replace the start/stop button
    if(action == "start"){
        image.src = imageLink + "start.png";
        run.title = "stop";
        run.style.border = "3px solid red";
    } else{
        image.src = imageLink + "stop.gif";
        run.title = "start";
        run.style.border = "3px solid green";
    }

    // store in the database
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
        image.src = imageLink + "start.png";
        run.title = "stop";
        run.innerHTML = "stop";
        run.style.border = "3px solid red";
    } else{
        image.src = imageLink + "stop.gif";
        run.title = "start";
        run.innerHTML = "start";
        run.style.border = "3px solid green";
    }
})
.catch(err => {
    console.error(err);
});