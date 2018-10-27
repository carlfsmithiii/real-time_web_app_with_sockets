const expect = require('expect');

const {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Jen';
        const text = 'Some kind of message';
        const message = generateMessage(from, text);
        expect(message).toMatchObject({from, text});
        expect(typeof message.createdAt).toBe('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
         const from = 'Burt';
         const latitude = 1;
         const longitude = 2;
         const message = generateLocationMessage(from, latitude, longitude);
         const url = `https://www.google.com/maps?q=${latitude},${longitude}`;
         expect(message).toMatchObject({from, url});
         expect(typeof message.createdAt).toBe('number');
    });
});