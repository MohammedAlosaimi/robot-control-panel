const run = document.getElementById("start-stop");
const forward = document.getElementById("forward");
const left = document.getElementById("left");
const right = document.getElementById("right");
const backward = document.getElementById("backward");
const arabic = document.getElementById("arabic");
const english = document.getElementById("english");

// when submit move
function submitMove( move ){
    $.post("/phpinvisualStudioCode/robot-control-panel/back-end/moves.php", {moves: move}, function(data){
        return confirm( data);
    });
}

// when submit the start/stop
function submitRun(){
    var action = run.title;
    if(action == "start"){
        run.title = "stop";
        run.style.border = "3px solid red";
    } else{
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
    console.log(runInfo);
    if(runInfo == "start"){
        run.title = "stop";
        run.innerHTML = "stop";
        run.style.border = "3px solid red";
    } else{
        run.title = "start";
        run.innerHTML = "start";
        run.style.border = "3px solid green";
    }
})
.catch(err => {
    console.error(err);
});