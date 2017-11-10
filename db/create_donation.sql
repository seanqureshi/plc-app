INSERT INTO donations (donation_amt, comments, user_id, camp_id)
VALUES ($1, $2, $3, $4)
RETURNING *;