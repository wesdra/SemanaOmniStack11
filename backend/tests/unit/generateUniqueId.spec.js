const generateUniqueId = require("../../src/utils/generateUniqueId")
describe('Gerando ID único', ()=>{
    it('Esperamos que o Id único seja gerado', ()=>{
        const id = generateUniqueId();
        expect(id).toHaveLength(8);
    });
});