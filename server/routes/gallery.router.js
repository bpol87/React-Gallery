const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  // code here
});


// GET /gallery
router.get('/', (req, res) => {
  const sqlText = `
      SELECT * FROM "gallery"
        ORDER BY "id";
    `
  
    pool.query(sqlText)
      .then((dbRes) => {
        console.log(`Got stuff from database`, dbRes.rows);
        res.send(dbRes.rows)
      })
      .catch((dbErr) => {
        console.log('GET /api/gallery-list dbErr:', dbErr)
        res.sendStatus(500)
      })
});

module.exports = router;
