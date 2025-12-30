import { _decorator, Canvas, Component, director, Node, UITransform, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

import { GameCtrl } from './GameCtrl';

@ccclass('Ground')
export class Ground extends Component {
    
    @property({
        type: Node,
        tooltip: "Ground 1 is here"
    })
    public ground1 : Node;

    @property({
        type: Node,
        tooltip: "Ground 2 is here"
    })
    public ground2 : Node;

    @property({
        type: Node,
        tooltip: "Ground 3 is here"
    })
    public ground3 : Node;

    // Create ground width variable
    public groundWidth1 : number;
    public groundWidth2 : number;
    public groundWidth3 : number;

    public tempStartPosition1 = new Vec3;
    public tempStartPosition2 = new Vec3;
    public tempStartPosition3 = new Vec3;

    public gameCtrlSpeed = new GameCtrl;
    public gameSpeed : number;

    protected onLoad(): void {
        this.startUp();
    }

    startUp(){
        this.groundWidth1 = this.ground1.getComponent(UITransform).width;
        this.groundWidth2 = this.ground2.getComponent(UITransform).width;
        this.groundWidth3 = this.ground3.getComponent(UITransform).width;

        this.tempStartPosition1.x = 0;
        this.tempStartPosition2.x = this.groundWidth1;
        this.tempStartPosition3.x = this.groundWidth1 + this.groundWidth2;

        this.ground1.setPosition(this.tempStartPosition1);
        this.ground2.setPosition(this.tempStartPosition2);
        this.ground3.setPosition(this.tempStartPosition3);
    }


    update(deltaTime: number) {
        this.gameSpeed = this.gameCtrlSpeed.speed;

        this.tempStartPosition1 = this.ground1.position;
        this.tempStartPosition2 = this.ground2.position;
        this.tempStartPosition3 = this.ground3.position;

        // Move the ground backward by the game speed
        this.tempStartPosition1.x -= this.gameSpeed * deltaTime;
        this.tempStartPosition2.x -= this.gameSpeed * deltaTime;
        this.tempStartPosition3.x -= this.gameSpeed * deltaTime;

        const scene = director.getScene();
        const canvas = scene.getComponentInChildren(Canvas);

        if(this.tempStartPosition1.x <= -this.groundWidth1){
            this.tempStartPosition1.x = canvas.getComponent(UITransform).width;
        }

        if(this.tempStartPosition2.x <= -this.groundWidth2){
            this.tempStartPosition2.x = canvas.getComponent(UITransform).width;
        }

        if(this.tempStartPosition3.x <= -this.groundWidth3){
            this.tempStartPosition3.x = canvas.getComponent(UITransform).width;
        }

        // Apply the updated positions back to the ground nodes
        this.ground1.setPosition(this.tempStartPosition1);
        this.ground2.setPosition(this.tempStartPosition2);
        this.ground3.setPosition(this.tempStartPosition3);
    }
}


