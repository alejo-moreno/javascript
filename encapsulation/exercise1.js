/*Implementation of Combination Constructor/Prototype Pattern*/
function User(theName, theEmail) {
    this.name = theName;
    this.email = theEmail;
    this.quizScores = [];
    this.currentScore = 0;
}

User.prototype = {
    //The one disadvantage of overwriting the prototype is that the constructor property no longer points to the prototype, so we have to set it manually. Hence this line:
    constructor: User,
    saveScore: function(theScoreToAdd) {
        this.quizScores.push(theScoreToAdd)
    },
    showNameAndScores: function() {
        var scores = this.quizScores.length > 0 ? this.quizScores.join(",") : "No Scores Yet";
        return this.name + " Scores: " + scores;
    },
    changeEmail: function(newEmail) {
        this.email = newEmail;
        return "New Email Saved: " + this.email;
    }
}

//Client Test
firstUser = new User("Richard", "Richard@examnple.com");
firstUser.changeEmail("RichardB@examnple.com");
firstUser.saveScore(15);
firstUser.saveScore(10);
firstUser.showNameAndScores(); //Richard Scores: 15,10​

