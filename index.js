const express = require('express');
const axios = require('axios');
const cors = require('cors');
const path = require('path');

const app = express();

// Middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

// Mock data for testing (remove when using real API)
const mockMatches = [
  {
    utcDate: new Date(Date.now() + 86400000).toISOString(),
    homeTeam: { name: "Arsenal FC" },
    awayTeam: { name: "Chelsea FC" },
    competition: { name: "Premier League" }
  },
  {
    utcDate: new Date(Date.now() + 172800000).toISOString(),
    homeTeam: { name: "FC Barcelona" },
    awayTeam: { name: "Real Madrid" },
    competition: { name: "La Liga" }
  }
];

// API endpoint (using mock data - replace with real API call)
app.get('/api/matches', (req, res) => {
  // For real API (uncomment and add your API key):
  /*
  axios.get('https://api.football-data.org/v4/matches', {
    headers: { 'X-Auth-Token': 'YOUR_API_KEY' },
    params: {
      dateFrom: new Date().toISOString().split('T')[0],
      dateTo: new Date(Date.now() + 7*24*60*60*1000).toISOString().split('T')[0]
    }
  })
  .then(response => res.json(response.data))
  .catch(err => res.status(500).json({ error: err.message }));
  */

  // Using mock data (comment this out when using real API)
  res.json({ matches: mockMatches });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
