class Player
{
 constructor()
 {
     
 }

 readpc(){
     mydb.ref("playerCount").on("value", function(data) {
      mypc = data.val();
     })
 }

 updatePC(PC)
{
    mydb.ref("/").update({
        playerCount:PC
    })
}

updateName(PCname){
    var playerIndex = "players/player" + mypc
    mydb.ref(playerIndex).set({name:PCname})
}
}