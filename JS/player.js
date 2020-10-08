class Player {
    constructor() {
        this.name = null
        this.distance = 0
        this.index = null;
        this.rank = 0;
    }

    getCount() {
        var countref = database.ref("playerCount")
        countref.on("value", function(data) {
            playerCount = data.val()
            console.log(data)
        })
    }
    updateCount(count) {
        database.ref('/').update 
        ({
            playerCount : count 
        })
    }
    update() {
        var playerindex = "players/player" + this.index
        database.ref(playerindex).set
        ({
            name : this.name, 
            distance : this.distance
        })
    }
    static getPlayerInfo() {
        database.ref("players").on("value", (data) => {
            allPlayers = data.val()
        })
    }
    getRank() {
        var rankref = database.ref("rank")
        rankref.on("value",(data)=> {
            this.rank = data.val()
            console.log(data)
        })
    }
    static updateRank(Rank) {
        database.ref('/').update 
        ({
            rank : Rank
        })
    }
}