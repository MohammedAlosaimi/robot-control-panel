function submitMove( move ){
    $.post("/phpinvisualStudioCode/robot-control-panel/back-end/moves.php", {moves: move}, function(data){
        return confirm( data);
    });
}

function submitRun(){

}