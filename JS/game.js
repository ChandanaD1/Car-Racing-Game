class Game {
    constructor() {

    }
    getState() {
        var countref = database.ref("gameState")
        countref.on("value", function(data) {
            gameState = data.val()
        })
    }
    updateState(state) {
        database.ref('/').update 
        ({
            gameState : state 
        })
    }
    start() {
        if(gameState == 0) {
            player = new Player();
            player.getCount()
            form = new Form();
            form.display();
        }
        car1 = createSprite(100,200)
        car1.addImage(car1img)
        car2 = createSprite(300,200)
        car2.addImage(car2img)
        car3 = createSprite(500,200)
        car3.addImage(car3img)
        car4 = createSprite(700,200)
        car4.addImage(car4img)
        cars = [car1,car2,car3,car4]
    }
    play() {
        form.hide()
        Player.getPlayerInfo()
        player.getRank(); 
        if(allPlayers != undefined) {
            image (trackimg,0,-(windowHeight*4),windowWidth,windowHeight*5)
            var xpos =150;
            var ypos =0;
            var index =0;
            for(var i in allPlayers) {
                xpos = xpos +200;
                ypos = windowHeight - allPlayers[i].distance
                cars[index].x = xpos
                cars[index].y = ypos
                index = index + 1;
                if(index == player.index) {
                    cars[index-1].shapeColor = "purple"
                    camera.position.x = windowWidth/2;
                    camera.position.y = cars[index - 1].y;
                    fill("white")
                    strokeWeight(4)
                    stroke("black")
                    ellipse(xpos, ypos, 100,100)
                } else {
                    cars[index-1].shapeColor = "pink"
                }
            }
        }
        if(keyDown(UP_ARROW) && player.index != null) {
            player.distance = player.distance + 10
            console.log(player.distance)
            player.update()
        } 
        if(player.distance > 3430) {
            player.rank = player.rank + 1;
            Player.updateRank(player.rank)
            console.log(player.rank)
            gameState = 2;
        }
        drawSprites();
    }
    end() {
        fill("white")
        textSize(30)
        text("Game Over", windowWidth/2, (-(windowHeight*4))-50)
        for(var r = 1; r<5; r = r+1) {
            if(r == player.index) {
                text("Rank: " + player.rank, windowWidth/2 -30, -(windowHeight*3.5)-80)
            }
        }
    }
}