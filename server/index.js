const express = require('express');
const path = require('path');
const app = module.exports = express();
const PORT = process.env.PORT || '9090';

app.use(express.static(path.join(__dirname, '../dist')));
app.listen(PORT, () => console.log(`listening on http://localhost:${PORT}`));