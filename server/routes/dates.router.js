const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    console.log(req.user)
    const sqlText = 
    `SELECT "show".show_name, "show".date FROM show
    JOIN "user_show" on "show".id = "user_show".show_id
    JOIN "user" on "user".id = "user_show".user_id
    Where "user".id = $1;
    ;`

    const sqlValues = [req.user.id]
    pool.query(sqlText, sqlValues)
    .then((dbRes) => {
        for (let i=0; i<dbRes.rows.length; i++){
            let formattedDateArray = (`${dbRes.rows[i].date}`).split(' 00:00:00');
            dbRes.rows[i].date = formattedDateArray[0]
            console.log(formattedDateArray)
        };
        console.log(dbRes.rows)
        res.send(dbRes.rows);
    })
    .catch((dbErr) => {
        res.sendStatus(500);
    })
});

/**
 * POST route template
 */
router.post('/', (req, res) => {
  // POST route code here
});

module.exports = router;
