import Magician from '../Magician';

test('calculate attack', () => {
    const mage = new Magician();
    mage.attack = 4;
    expect(mage.attack).toBe(105);
});

test('calculate stoned', () => {
    const mage = new Magician();
    mage.stoned = 2;
    expect(mage.stoned).toBe(130);
});
