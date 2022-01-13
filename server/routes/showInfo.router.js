const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * GET route template
 */
// THIS IS GET ALL SALES INFO FOR SHOW
router.get('/:id', (req, res) => {
  console.log('in show details route')
  const sqlQuery = `
  SELECT * FROM "sales"
  WHERE "show_id" = $1;
  `
  const sqlValues = req.params.id
  pool.query(sqlQuery, [sqlValues])
  .then((dbRes)=>{
    // console.log('#######################')
    // console.log(dbRes.rows)
    res.send(dbRes.rows);
  }).catch((dbErr)=>{
    console.error('THIS IS A GET SALE INFO ISSUE', dbErr)
    res.sendStatus(500)
  })
});

// THIS IS UPDATE SINGLE SALE INFO
router.put('/sales/:id', (req, res) => {
  console.log('in update details route')
  const sqlQuery = `
  UPDATE "sales"
    SET
      "Name" = $2,
      "Amount" = $3,
      "Price" = $4,
      "status" = $5,
      "method" = $6

  WHERE "ID" = $1;
  `
  const sqlValues = [
    req.body.id,
    req.body.Name,
    req.body.Amount,
    req.body.Price,
    req.body.status,
    req.body.method
  ]
  console.log(sqlValues)
  pool.query(sqlQuery, sqlValues)
  .then((dbRes)=>{
    res.sendStatus(200);
  }).catch((dbErr)=>{
    console.error('THIS IS A UPDATE SALE INFO ISSUE', dbErr)
    res.sendStatus(500)
  })
});

router.get('/sales/:id', (req, res) => {
  console.log('in show details route')
  const sqlQuery = `
  SELECT * FROM "sales"
  WHERE "ID" = $1;
  `
  const sqlValues = req.params.id
  pool.query(sqlQuery, [sqlValues])
  .then((dbRes)=>{
    // console.log('<><><><><><><><><><><><>')
    // console.log(dbRes.rows[0])
    res.send(dbRes.rows[0]);
  }).catch((dbErr)=>{
    console.error('THIS IS A GET SALE INFO ISSUE', dbErr)
    res.sendStatus(500)
  })
});

/**
 * POST route template
 */
router.post('/:id', (req, res) => {
  // POST route code here
  const insertSaleQuery = `
  INSERT INTO "sales" ("Name", "Amount", "Price", "status", "method", "show_id")
  VALUES  ($1, $2, $3, $4, $5, $6);
  `
  pool.query(insertSaleQuery, [req.body.Name, req.body.Amount, req.body.Price, req.body.status, req.body.method, req.body.id])
  .then(result => {
    //Now that both are done, send back success!
    res.sendStatus(201);
}).catch(err => {
    // catch for second query
    console.log('THIS IS A CREATE SALE ISSUE', err);
    res.sendStatus(500)
})
});

router.delete('/sales/:id', (req, res)=>{
  const deleteSaleQuery = `
  DELETE FROM "sales"
  WHERE "ID" = $1;
  `
  const deleteSaleValue = req.params.id
  console.log('this is the delete req.params.id', req.params.id)
pool.query(deleteSaleQuery, [deleteSaleValue]).then(result =>{
  res.sendStatus(201);
}).catch(err=>{
  console.log('THIS IS A DELETE SALE ISSUE', err);
  res.sendStatus(500)
})
});

module.exports = router;