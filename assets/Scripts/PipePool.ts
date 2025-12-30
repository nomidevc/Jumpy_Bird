import { _decorator, Component, instantiate, Node, NodePool, Prefab } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('PipePool')
export class PipePool extends Component {

    @property({
        type: Prefab
    })
    public pipePrefab = null;

    @property({
        type: Node
    })
    public pipePoolHome;

    public pool = new NodePool;

    public pipeCreated;

    initPool(){
        let initPoolCount = 3;

        for(let i = 0; i<initPoolCount; i++){
            this.pipeCreated = instantiate(this.pipePrefab);

            if(i == 0){
                this.pipePoolHome.addChild(this.pipeCreated);
            } else {
                this.pool.put(this.pipeCreated);
            }
        }
    }

    addPool(){
        if(this.pool.size() > 0){
            this.pipeCreated = this.pool.get();
        } else {
            this.pipeCreated = instantiate(this.pipePrefab);
        }

        this.pipePoolHome.addChild(this.pipeCreated);
    }

    reset(){
        this.pipePoolHome.removeAllChildren();
        this.pool.clear();

        this.initPool();
    }
}


