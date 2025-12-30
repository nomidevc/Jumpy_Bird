import { _decorator, Component, Node, Vec3, screen, find, UITransform } from 'cc';
const { ccclass, property } = _decorator;

const random = (min, max) => {
    return Math.random() * (max - min) + min;
}

@ccclass('Pipe')
export class Pipe extends Component {
    
    @property({
        type: Node,
        tooltip: "Top Pipe"
    })
    public topPipe: Node;

    @property({
        type: Node,
        tooltip: "Bottom Pipe"
    })
    public bottomPipe: Node;

    public tempBottomPipePos: Vec3 = new Vec3(0, 0 ,0);
    public tempTopPipePos: Vec3 = new Vec3(0, 0, 0);

    public scene = screen.windowSize;

    public gameCtrl; // Reference to GameCtrl 
    public pipeSpeed : number;
    public tmpPipeSpeed : number;

    isPass : boolean;

    protected onLoad(): void {
        this.gameCtrl = find("GameCtrl").getComponent("GameCtrl");
        this.pipeSpeed = this.gameCtrl.pipeSpeed;
        this.initPipePos();

        this.isPass = false;
    }

    initPipePos(){
        this.tempBottomPipePos.x = this.bottomPipe.getComponent(UITransform).width + this.scene.width;
        this.tempTopPipePos.x = this.topPipe.getComponent(UITransform).width + this.scene.width;

        let gapBetweenPipe = random(90, 100);
        let topHeight = random(0, 450);

        this.tempTopPipePos.y = topHeight;
        this.tempBottomPipePos.y = topHeight - gapBetweenPipe * 10;

        this.bottomPipe.setPosition(this.tempBottomPipePos);
        this.topPipe.setPosition(this.tempTopPipePos);

    }

    protected update(dt: number): void {
        this.tmpPipeSpeed = this.pipeSpeed * dt;

        this.tempBottomPipePos = this.bottomPipe.position;
        this.tempTopPipePos = this.topPipe.position;

        this.tempBottomPipePos.x -= this.tmpPipeSpeed;
        this.tempTopPipePos.x -= this.tmpPipeSpeed;

        this.bottomPipe.setPosition(this.tempBottomPipePos);
        this.topPipe.setPosition(this.tempTopPipePos);

        if(this.isPass == false && this.topPipe.position.x <= 0){
            this.isPass = true;
            this.gameCtrl.passPipe();
        }

        if(this.topPipe.position.x < -this.scene.width - this.topPipe.getComponent(UITransform).width){
            this.node.destroy();
            this.gameCtrl.createPipe();
        }

    }
}


