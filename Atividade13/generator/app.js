const express = require('express');
const axios = require('axios');
const app = express();

// Configurações
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = process.env.PORT || 3000;

// Rota principal
app.get('/', async (req, res) => {
    try {
        const response = await axios.get('https://ron-swanson-quotes.herokuapp.com/v2/quotes');
        const quote = response.data[0];
        res.render('index', { quote });
    } catch (error) {
        console.error('Erro ao obter a citação:', error.message);
        res.render('index', { quote: "Erro ao buscar a mensagem do dia." });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
