INSERT INTO campaigns (camp_name, desired_amt, overview, cover_img, user_id, profile_img)
VALUES ($1, $2, $3, $4, $5, $6)
RETURNING *;

