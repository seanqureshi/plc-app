UPDATE campaigns
SET camp_name = $2, desired_amt = $3, overview = $4, cover_img = $5
WHERE camp_id = $1;