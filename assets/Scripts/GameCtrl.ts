import { _decorator, CCInteger, Component, director, EventKeyboard, Input, input, KeyCode, Node, Collider2D, Contact2DType, IPhysics2DContact, game } from 'cc';
const { ccclass, property } = _decorator;

import { Ground } from './Ground';
import { Result } from './Result';
import { Bird } from './Bird';
import { PipePool } from './PipePool';
import { BirdAudio } from './BirdAudio';

@ccclass('GameCtrl')
export class GameCtrl extends Component {
    
    @property({
        type: Bird,
        tooltip: "Our bird is here"
    })
    public bird: Bird;

    @property({
        type: Ground,
        tooltip: "This is a ground"
    })
    public ground : Ground;

    @property({
        type: PipePool,
    })
    public pipeQueue: PipePool;

    @property({
        type: Result,
        tooltip: "Result is here"
    })
    public results : Result;

    @property({
        type: BirdAudio
    })
    public birdAudio: BirdAudio;

    @property({
        type: CCInteger
    })
    public speed : number = 300;

    @property({
        type: CCInteger,
    })
    public pipeSpeed : number = 200;

    public isGameOver : boolean;

    protected onLoad(): void {
        this.initListener();

        this.results.resetScore();

        this.isGameOver = true;

        director.pause();
    }

    initListener(){
        this.node.on(Node.EventType.TOUCH_START, () =>{
            if(this.isGameOver == true){
                this.resetGame();
                this.bird.resetBird();
                this.startGame();
            } else {
                this.bird.fly();
                this.birdAudio.onAudioQueue(0);
            }
        })
    }

    startGame(){
        this.results.hideResults();
        director.resume();
    }

    protected update(dt: number): void {
        if(this.isGameOver == false){
            this.birdStruck();
        }
    }

    gameOver(){
        this.birdAudio.onAudioQueue(3);
        this.results.showResults();
        this.isGameOver = true;
        director.pause();
    }

    resetGame(){
        this.results.resetScore();
        this.bird.resetBird();
        this.pipeQueue.reset();

        this.isGameOver = false;

        this.startGame();
    }

    createPipe(){
        this.pipeQueue.addPool();
    }

    passPipe(){
        this.results.addScore();
        this.birdAudio.onAudioQueue(1);
    }

    contactGroundPipe(){
        let collider = this.bird.getComponent(Collider2D);

        if(collider){
            collider.on(Contact2DType.BEGIN_CONTACT, this.onBeginContact, this);
        }
    }

    onBeginContact(selfCollider: Collider2D, otherCollider: Collider2D, contact: IPhysics2DContact | null){
        this.bird.hitSomething = true;

        this.birdAudio.onAudioQueue(2);
    }

    birdStruck(){
        this.contactGroundPipe();

        if(this.bird.hitSomething){
            this.gameOver();
        }
    }

}


