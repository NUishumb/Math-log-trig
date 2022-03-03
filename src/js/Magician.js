export default class Magician {
    constructor() {
        this.baseDamage = 150;
    }

    set attack(distance) {
        this.damagePenalty = (distance - 1) * (this.baseDamage / 10);
    }

    get attack() {
        if (this.damagePenalty === undefined) {
            return this.baseDamage;
        }
        return this.baseDamage - this.damagePenalty;
    }

    get stoned() {
        return this.stonedDamage;
    }

    set stoned(distance) {
        this.damagePenalty = (distance - 1) * (this.baseDamage / 10);
        this.stonedDamage = (this.baseDamage - Math.log2(distance) * 5) - this.damagePenalty;
    }
}
