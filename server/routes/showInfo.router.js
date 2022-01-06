const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
router.get('/:id', (req, res) => {
  console.log('in show details route')
  const sqlQuery = `
  SELECT * FROM "sales"
  WHERE "show_id" = $1;
  `
  const sqlValues = req.params.id
  pool.query(sqlQuery, [sqlValues])
  .then((dbRes)=>{
    console.log('#######################')
    console.log(dbRes.rows)
    res.send(dbRes.rows);
  }).catch((dbErr)=>{
    console.error(dbErr)
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;