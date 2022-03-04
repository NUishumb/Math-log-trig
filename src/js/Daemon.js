import PlayerBase from './PlayerBase';

export default class Daemon extends PlayerBase {
    constructor() {
        super();
        this.stoned = true;
    }
}
