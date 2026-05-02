new Vue({
    el: '#app',

    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    
    methods: {
        startGame: function(){
            this.gameIsRunning = true;
            this.playerHealth = this.monsterHealth = 100;
            this.turns = [];
        },

        monsterAttack: function() {
            var damage = this.calculateDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                text: "Monster hits player for " + damage
            })
            this.checkWin();
        },

        attack: function(){
            var damage = this.calculateDamage(3, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: "Player hits monster for " + damage
            })

            if(this.checkWin()){
                return;
            }

            this.monsterAttack();

        },

        specialAttack: function(){
            var damage = this.calculateDamage(10, 20);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player hits monster hard for ' + damage
            })
            
            if(this.checkWin()){
                return;
            }

            this.monsterAttack();
        },

        heal: function(){
            this.playerHealth <=90 ? this.playerHealth+=10 : this.playerHealth = 100;
            this.turns.unshift({
                isPlayer: true,
                text: 'Player heals for 10'
            })
            this.monsterAttack();
        },
        
        giveUp: function(){
            this.startGame();
            this.gameIsRunning = false;
            this.turns = [];
        },
        
        calculateDamage: function(minDamage, maxDamage){
            return Math.max((Math.floor(Math.random() * maxDamage) + 1), minDamage);
        },

        checkWin: function(){
            if(this.monsterHealth <= 0){
                if(confirm('You won! New Game?')){
                    this.startGame();
                } else{
                    this.gameIsRunning = false;
                }
                return true;
            } else if(this.playerHealth <= 0){
                if(confirm('You won! New Game?')){
                    this.startGame();
                } else{
                    this.gameIsRunning = false;
                }
                return true;
            }
            return false;
        }
    }
})