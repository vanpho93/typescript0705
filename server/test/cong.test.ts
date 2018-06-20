import { equal } from 'assert';
import request from 'supertest';
import { app } from '../src/index';

describe('GET /cong/:a/:b', () => {
    it('Can add two numbers', async () => {
        const response = await request(app).get('/cong/4/5');
        equal(response.body.result, 9);
    });
});
