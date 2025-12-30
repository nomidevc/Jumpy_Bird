import { _decorator, CCInteger, Component, director, EventKeyboard, Input, input, KeyCode, Node } from 'cc';
const { ccclass, property } = _decorator;

import { Ground } from './Ground';
import { Result } from './Result';

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    
    @property({
        type: Ground,
        tooltip: "This is a ground"
    })
    public ground : Ground;

    @property({
        type: Result,
        tooltip: "Result is here"
    })
    public results : Result;

    @property({
        type: CCInteger
    })
    public speed : number = 300;

    @property({
        type: CCInteger,
    })
    public pipeSpeed : number = 200;

    protected onLoad(): void {
        this.initListener();

        this.results.resetScore();

        director.pause();
    }

    initListener(){
        input.on(Input.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: EventKeyboard){
        switch(event.keyCode){

            case KeyCode.KEY_A:
                this.gameOver();
            break;

            case KeyCode.KEY_S:
                this.results.addScore();
            break;

            case KeyCode.KEY_D:
                this.resetGame();
        }
    }

    startGame(){
        this.results.hideResults();
        director.resume();
    }

    gameOver(){
        this.results.showResults();
        director.pause();
    }

    resetGame(){
        this.results.resetScore();
        
        this.startGame();
    }

}


