const express = require('express');
const cors = require('cors');
const visitCounterRoutes = require('./routes/visitCounter.cjs');
const latestVideoTitleRoutes = require('./routes/latestVideoTitle.cjs');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/visit-counter', visitCounterRoutes);
app.use('/last-title', latestVideoTitleRoutes);

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Listening in PORT: ${PORT}`);
});
