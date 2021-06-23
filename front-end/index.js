const run = document.getElementById("start-stop");
const forward = document.getElementById("forward");
const left = document.getElementById("left");
const right = document.getElementById("right");
const backward = document.getElementById("backward");
const arabic = document.getElementById("arabic");
const english = document.getElementById("english");
console.log(run.title);

function submitMove( move ){
    $.post("/phpinvisualStudioCode/robot-control-panel/back-end/moves.php", {moves: move}, function(data){
        return confirm( data);
    });
}

function submitRun(){
    var action = run.title;
    if(action == "start"){
        run.title = "stop";
    } else{
        run.title = "start";
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
        run.title = "start";
        run.style.border = "3px solid green;"
    } else{
        run.innerHTML = "stop";
        run.style.border = "3px solid red;"
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
        run.style.border = "3px solid green;";
    } else {
        run.innerHTML = "stop";
        run.style.border = "3px solid red";
    }

    //hide the() on the top of the page
    arabic.classList.remove("hidden");
    english.classList.add("hidden")
}