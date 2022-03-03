import Daemon from '../Daemon';

test('calculate attack', () => {
    const daemon = new Daemon();
    daemon.attack = 10;
    expect(daemon.attack).toBe(10);
});

test('calculate stoned', () => {
    const daemon = new Daemon();
    daemon.stoned = 2;
    expect(daemon.stoned).toBe(85);
});
