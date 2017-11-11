SELECT SUM(donation_amt) FROM donations
where camp_id=$1;
