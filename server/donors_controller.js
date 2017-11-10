module.exports = {
    addDonation: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      console.log(parseInt(req.body.donation_amt), req.body.comments, req.user.user_id, parseInt(req.body.camp_id))
      
      dbInstance.create_donation([parseInt(req.body.donation_amt), req.body.comments, req.user.user_id, parseInt(req.body.camp_id)])
        .then( (response) => res.status(200).send(response) )
        .catch( (error) => console.log(error) );
    }
}