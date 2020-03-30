const request = require("supertest");
const app = require('../../src/app');
const connection = require('../../src/database/connection');
describe('ONG', ()=>{
    beforeEach(async ()=>{
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });
    afterAll(async ()=>{
        await connection.migrate.destroy();
    })

    it('Criando uma nova ONG', async ()=>{
        const response = await request(app)
        .post('/ongs')
        .send({
              name:"Ong do amigos dos animais",
              email: "wesdra@teste.com",
              whatsapp:"11940413848",
              city:"Cotia",
              uf:"SP"
          });
          expect(response.body).toHaveProperty("id");
          expect(response.body.id).toHaveLength(8);

    })
})