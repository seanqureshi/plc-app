INSERT INTO camp_users
(username, email, profile_img, auth_id)
VALUES ($1, $2, $3, $4)
RETURNING *;