module.exports = {
  addDonation: (req, res, next) => {
    const dbInstance = req.app.get('db');
    //   console.log(parseInt(req.body.donation_amt), req.body.comments, req.user.user_id, parseInt(req.body.camp_id))
    dbInstance.create_donation([parseInt(req.body.donation_amt), req.body.comments, req.user.user_id, parseInt(req.body.camp_id)])
      .then((response) => res.status(200).send(response))
      .catch((error) => console.log(error));
  },
  getDonation: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_donation([req.params.id])
      .then(donation => res.status(200).send(donation))
      .catch(() => res.status(500).send());
  },
  getDonations: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.read_donations()
      .then(donations => res.status(200).send(donations))
      .catch(() => res.status(500).send());
  },
  updateTotal: (req, res, next) => {
    const dbInstance = req.app.get('db');
    dbInstance.update_total([parseInt(req.params.id)])
      .then((donation) => res.status(200).send(donation))
      .catch(() => res.status(500).send());
  },
}