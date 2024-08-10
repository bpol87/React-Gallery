const express = require('express');
const pool = require('../modules/pool.js');
const router = express.Router();

// PUT /gallery/like/:id
router.put('/like/:id', (req, res) => {
  console.log(`PUT /api/gallery/like/${req.params.id} received a request!`);
  console.log(req.body)
  const sqlText = `
      UPDATE "gallery"
      SET "likes" = $1
      WHERE "id" = $2
  `
  let sqlValues = [req.body.newLikes, req.params.id]
  pool.query(sqlText, sqlValues)
  .then((dbRes) => {
    console.log(`Successfully Updated likes!`, dbRes.rows)
    res.send(dbRes.rows)
  })
  .catch((dbErr) => {
    console.log('PUT /api/gallery-list/like/ dbErr:', dbErr)
    res.sendStatus(500);
  })
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
