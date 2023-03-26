const app = require('./app');

// Variáveis de ambiente
require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));