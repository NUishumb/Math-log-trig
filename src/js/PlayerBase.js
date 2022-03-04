export default class PlayerBase {
    constructor() {
        this.baseDamage = 0;
        this.stoned = false;
        this.distance = 2;
    }

    set attack(damage) {
        this.baseDamage = damage;
        this.damagePenalty = (this.distance - 1) * (damage / 10);
    }

    get attack() {
        if (this.damagePenalty === undefined && this.stoned === true) {
            return this.baseDamage - Math.log2(this.distance) * 5;
        }
        if (this.damagePenalty !== undefined && this.stoned === false) {
            return this.baseDamage - this.damagePenalty;
        }
        if (this.damagePenalty !== undefined && this.stoned === true) {
            return (this.baseDamage - Math.log2(this.distance) * 5) - this.damagePenalty;
        }
        return this.baseDamage;
    }
}
