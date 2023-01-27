import request from 'supertest';
import {initServer} from '../../app';

describe('GET - Users', () => {
    it('Should', async () => {
        const expected = 'User created';
        const response = await request(initServer).get('/api/user')
        console.log(response);
        expect(expected).toStrictEqual(expected);
    });
});