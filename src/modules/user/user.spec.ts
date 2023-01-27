import request from 'supertest';
import server from '../../services/server';

describe('GET - Users', () => {
    test('Should', async () => {
        const expected = 'Nicolas';
        const response = await request(server).get('/api/user').expect(200).send()
        expect(response.body.nombre).toStrictEqual(expected);
    });
});