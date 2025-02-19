const express = require('express');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static('public'));

// Parse JSON bodies
app.use(express.json());

// Telegram API Handler
app.post('/withdraw', async (req, res) => {
    try {
        const { message } = req.body;
        await axios.post(`https://api.telegram.org/bot${process.env.BOT_TOKEN}/sendMessage`, {
            chat_id: process.env.ADMIN_ID,
            text: message
        });
        res.status(200).send('Request sent!');
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Failed to send');
    }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
