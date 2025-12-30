import { _decorator, AudioClip, AudioSource, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('BirdAudio')
export class BirdAudio extends Component {
    
    @property({
        type: [AudioClip]
    })
    public audioClips : AudioClip[] = [];
    
    @property({
        type: AudioSource
    })
    public audioSource : AudioSource = null!;

    onAudioQueue(index: number){
        let clip: AudioClip = this.audioClips[index];

        this.audioSource.playOneShot(clip);
    }

}


