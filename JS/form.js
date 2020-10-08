class Form {
    constructor() {
        this.title = createElement("h2")
        this.title.html("car racing game")
        this.title.position(windowWidth/2 - 60,20);
        this.input = createInput("name")
        this.input.position(windowWidth/2 - 50, windowHeight/2 - 50);
        this.button = createButton("play")
        this.button.position(windowWidth/2 + 80, windowHeight/2);
        this.button.style('font-size', '20px')
        this.button.style('background-color', 'aqua')
        this.button.style('border-radius', '10px')
        this.greeting = createElement("h3");
        this.greeting.position(windowWidth/2 - 20, windowHeight/3);
        this.reset = createButton("reset")
        this.reset.position(20,20);
        this.reset.style('font-size', '20px')
        this.reset.style('background-color', 'yellow')
        this.reset.style('border-radius', '50px')
    }
    hide() {
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
    display() {
        this.button.mousePressed(() =>{
            this.input.hide()
            this.button.hide()
            player.name = this.input.value()
            playerCount = playerCount + 1
            player.index = playerCount
            player.updateCount(playerCount)
            player.update();
            this.greeting.html("hello " + player.name);
        })
        this.reset.mousePressed(() => {
            player.updateCount(0)
            game.updateState(0)
            Player.updateRank(0)
            for(var i =1; i<5; i = i+1) {
                database.ref("players/player" + i).set({
                    distance: 0,
                    name:""
                })
            }
        }) 
    }
}