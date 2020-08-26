class Form {

    constructor(){
        this.input = createInput("Enter your username");
        this.button = createButton("Join");
        this.greeting = createElement("h3");
        this.reset = createButton("Reset");
    }

    display(){
        var title = createElement("h1");
        title.position(displayWidth/2 - 50,0);
        title.html("Need For Speed");
        this.input.position(displayWidth/2 - 40,displayHeight/2 - 80);
        this.reset.position(displayWidth - 100,20)
        this.button.position(displayWidth/2 + 30,displayHeight/2);
        
        this.reset.mousePressed(()=>{
            game.updateState(0);
            player.updateCount(0);
        })
        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name  = this.input.value();
            playerCount = playerCount + 1;
            player.index = playerCount;
            player.update();
            player.updateCount(playerCount);
            this.greeting.html("Hi!" + this.input.value());
            this.greeting.position(displayWidth/2 - 70,displayHeight/4);
        });
    }
    hide(){
        this.input.hide();
        this.button.hide();
        this.greeting.hide();
    }
}