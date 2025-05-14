const redis = require('redis');
const express = require('express');

// Use environment variables for Redis connection
const redisHost = process.env.REDIS_HOST || 'localhost';
const redisPort = process.env.REDIS_PORT || 6379;

// Create a Redis client
const client = redis.createClient({
  socket: {
    host: redisHost,
    port: redisPort,
  },
});

// Handle Redis connection events
client.on('connect', () => {
  console.log('Connected to Redis');
});

client.on('error', (err) => {
  console.error('Redis error:', err);
});

// Connect the Redis client
(async () => {
  try {
    await client.connect();
  } catch (err) {
    console.error('Failed to connect to Redis:', err);
  }
})();

// Initialize Express app
const app = express();

// Example route to track visits
app.get('/', async (req, res) => {
  try {
    const visits = (await client.get('visits')) || 0;
    res.send(`Number of visits is ${visits}`);
    await client.set('visits', parseInt(visits) + 1);
  } catch (err) {
    res.status(500).send('Error interacting with Redis');
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Listening on port 3000');
});