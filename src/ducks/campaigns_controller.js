// module.exports = {
//     createCamp: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
  
//       dbInstance.create_campaign([req.body.name, req.body.description, req.body.price, req.body.imageurl])
//         .then( () => res.status(200).send() )
//         .catch( () => res.status(500).send() );
//     },
  
//     getCamp: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
  
//       dbInstance.read_campaign([req.params.id])
//         .then( campaign => res.status(200).send( campaign ) )
//         .catch( () => res.status(500).send() );
//     },
  
//     getCamps: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
  
//       dbInstance.read_campaigns()
//         .then( campaigns => res.status(200).send( campaigns ) )
//         .catch( () => res.status(500).send() );
//     },
  
//     updateCamp: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
  
//       dbInstance.update_campaign([req.params.id, req.query.description])
//         .then( () => res.status(200).send() )
//         .catch( () => res.status(500).send() );
//     },
  
//     deleteCamp: ( req, res, next ) => {
//       const dbInstance = req.app.get('db');
  
//       dbInstance.delete_campaign([req.params.id])
//         .then( () => res.status(200).send() )
//         .catch( () => res.status(500).send() );
//     }
//   };


  // add overview text null on campaigns table DEFAULT to prewritten text
  // add comments varchar(500) on donations table

  //change above paramaters