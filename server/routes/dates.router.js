const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
const { rejectUnauthenticated } = require('../modules/authentication-middleware');
/**
 * GET route template
 */
router.get('/', rejectUnauthenticated, (req, res) => {
    //console.log(req.user)
    const sqlText = 
    `SELECT "show".show_name, "show".date, "show".id, "show"."Ticket Price" FROM show
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
            //console.log(formattedDateArray)
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
  // RETURNING "id" will give us back the id of the created movie
const insertDateQuery = `
INSERT INTO "show" ("show_name", "date", "Ticket Price")
VALUES ($1, $2, $3)
RETURNING "id";`

  // FIRST QUERY MAKES MOVIE
pool.query(insertDateQuery, [req.body.name, req.body.date, req.body.ticketPrice])
.then(result => {
    //console.log('New Date Id:', result.rows[0].id); //ID IS HERE!
    
    const createdDateId = result.rows[0].id

    // Now handle the genre reference
    const insertDateIDQuery = `
    INSERT INTO "user_show" ("user_id", "show_id")
    VALUES  ($1, $2);
    `
      // SECOND QUERY ADDS GENRE FOR THAT NEW MOVIE
    pool.query(insertDateIDQuery, [req.user.id, createdDateId]).then(result => {
        //Now that both are done, send back success!
        res.sendStatus(201);
    }).catch(err => {
        // catch for second query
        console.log(err);
        res.sendStatus(500)
    })

// Catch for first query
    }).catch(err => {
        console.log(err);
        res.sendStatus(500)
    })
});

router.delete('/:id', rejectUnauthenticated, (req, res) => {
    // RETURNING "id" will give us back the id of the created movie
const deleteLink = `
DELETE FROM "user_show"
WHERE "user_show"."show_id" = $1;
`

    // FIRST QUERY MAKES MOVIE
pool.query(deleteLink, [req.params.id])
    .then(result => {
        const deleteDate = `DELETE FROM "show"
        WHERE "show"."id" = $1;`
        pool.query(deleteDate, [req.params.id])
            .then(result => {
            const deleteSales = `DELETE FROM "sales"
            WHERE "show_id" = $1;`
            pool.query(deleteSales, [req.params.id])
                .then(result => {
                    res.send(201)
                }).catch(err => {
                console.log(err);
                res.sendStatus(500)
        })
        })
            .catch(err => {
            console.log(err);
            res.sendStatus(500)
            })
    .catch(err => {
    console.log(err);
    res.sendStatus(500)
    })
})
});

module.exports = router;
