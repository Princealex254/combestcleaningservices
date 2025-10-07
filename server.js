const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 8000;

// Enable CORS for all routes
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    credentials: true
}));

// Serve static files from current directory
app.use(express.static('.'));

// Handle preflight requests
app.options('*', cors());

// Main route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Careers page route
app.get('/careers', (req, res) => {
    res.sendFile(path.join(__dirname, 'careers.html'));
});

// Start server
app.listen(PORT, () => {
    console.log('🚀 COMBEST Cleaning Services Server Running!');
    console.log(`📁 Serving files from: ${__dirname}`);
    console.log(`🌐 Main page: http://localhost:${PORT}`);
    console.log(`📋 Careers page: http://localhost:${PORT}/careers.html`);
    console.log('Press Ctrl+C to stop the server');
});

// Handle server errors
process.on('uncaughtException', (err) => {
    console.error('❌ Uncaught Exception:', err);
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('❌ Unhandled Rejection at:', promise, 'reason:', reason);
});



