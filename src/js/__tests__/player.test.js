import Daemon from '../Daemon';
import Magician from '../Magician';

test('calculate daemon attack', () => {
    const daemon = new Daemon();
    daemon.attack = 100;
    expect(daemon.attack).toBe(85);
});

test('calculate magician attack', () => {
    const mage = new Magician();
    mage.attack = 150;
    expect(mage.attack).toBe(90);
});
