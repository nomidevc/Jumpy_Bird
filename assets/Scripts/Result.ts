import { _decorator, Component, Label, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('Result')
export class Result extends Component {
    
    @property({
        type: Label,
        tooltip: "Current Score"
    })
    public currentScoreLabel : Label;

    @property({
        type: Label,
        tooltip: "High Score"
    })
    public highScoreLabel : Label;

    @property({
        type: Label,
        tooltip: "Try again text"
    })
    public tryAgainText : Label;

    public maxScore : number = 0;
    public currentScore : number;

    updateScore(num : number){
        this.currentScore = num;

        this.currentScoreLabel.string = this.currentScore + '';
    }

    resetScore(){
        this.updateScore(0);
        this.hideResults();
    }

    addScore(){
        this.updateScore(this.currentScore + 1);
    }

    hideResults(){
        this.highScoreLabel.node.active = false;
        this.tryAgainText.node.active = false;
    }

    showResults(){
        this.maxScore = Math.max(this.currentScore, this.maxScore);
        this.highScoreLabel.string = "High Score: " + this.maxScore;
         
        this.highScoreLabel.node.active = true;
        this.tryAgainText.node.active = true;
    }

}


