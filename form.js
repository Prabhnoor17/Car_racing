class Form
{
 constructor(){

 }

display(){
    var title = createElement("h2")
    title.html("Car Racing")
    title.position(400,100)

    var input = createInput("Name")
    input.position(350,250)

    var button = createButton("SUBMIT")
    button.position(350,280)
    
    button.mousePressed(function(){
        input.hide();
        button.hide();
        
        var playername = input.value()
        mypc += 1

        myplayer.updatePC(mypc);
        myplayer.updateName(playername);

        var greeting = createElement("h3")
        greeting.html("Welcome to Car racing"+playername)
        greeting.position(400,300)


    })
}
}