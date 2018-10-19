const request = require('supertest');
const expect = require('expect');

var app = require('./server').app;

describe('Server', () => {
    describe('#GET/', () => {
        it('should return hello world response', (done) => {
            request(app)
            .get('/')
            .expect(404)
            .expect((res) => {
                expect(res.body).toInclude({
                    message: 'Page Not Found.'
                });
            })
            .end(done);
        });
    });
    describe('#GET/users', () => {
        it('should return users response', (done) => {
            request(app)
            .get('/users')
            .expect(200)
            .expect((res)=> {
                expect(res.body).toInclude({
                    name: 'Dracula',
                    age: '100M'
                });
            })
            .end(done);
        });
    });
});

