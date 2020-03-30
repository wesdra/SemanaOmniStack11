const express = require("express");
const cors = require("cors");
const { errors } = require("celebrate");
const routes = require("./routes");
const app = express();

app.use(express.json());
app.use(cors());
app.use(routes);

// Quando não encontra rota, entra aqui:
app.use((req, res, next) => {
    const erro = new Error('Não encontrado');
    erro.status = 404;
    next(erro);
});
app.use((error, req, res, next) => {
    res.status(error.status || 500);
    return res.send({
        erro: {
            mensagem: error.message
        }
    });
});

app.use(errors());

app.listen(3333);
