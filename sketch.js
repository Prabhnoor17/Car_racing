var mydb;
var mypc = 0
var mygs = 0
var mygame, myplayer, myform;


function setup(){
    createCanvas(500,500);
    
    mydb = firebase.database();
    



    
}

function draw(){
    background("white");
    
    
    mygame = new Game()
    mygame.start();
}

