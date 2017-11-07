module.exports = {
    createCamp: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
      console.log(req.body)
      dbInstance.create_campaign([req.body.camp_name, req.body.desired_amt, req.body.overview, req.body.cover_img, req.user.user_id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    getCamp: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_campaign([req.params.camp_id])
        .then( campaign => res.status(200).send( campaign ) )
        .catch( () => res.status(500).send() );
    },
  
    getCamps: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.read_campaigns()
        .then( campaigns => res.status(200).send( campaigns ) )
        .catch( () => res.status(500).send() );
    },
  
    updateCamp: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.update_campaign([req.params.camp_id, req.query.camp_name, req.query.desired_amt, req.query.overview, req.query.cover_img])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    },
  
    deleteCamp: ( req, res, next ) => {
      const dbInstance = req.app.get('db');
  
      dbInstance.delete_campaign([req.params.camp_id])
        .then( () => res.status(200).send() )
        .catch( () => res.status(500).send() );
    }
  };