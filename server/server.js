require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    port = 3035; 

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then( (db) => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
  }, function(accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then( user => {
        if (user[0]){
            return done(null, user[0].user_id);
        } else {
            db.create_user([
                userData.name,
                userData.email,
                userData.picture,
                userData.identities[0].user_id
            ]).then( user => {
                return done(null, user[0].user_id)
            })
        }

    })
}));

passport.serializeUser(function(id, done){
    done(null, id) 
});
passport.deserializeUser(function(id, done){
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]); // id or profile info put on req.user
    })
});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: 'http://localhost:3000/#/mobile',
    failureRedirect: '/auth'
}));
app.get('/auth/me', function(req,res){
    if(req.user){
        return res.status(200).send(req.user)
    } else {
        res.status(401).send('Unauthorized: Need to log in.')
    }
});
app.get('/logout', function(req, res){
    req.logOut();
    return res.redirect('http://localhost:3000/')
});


// // USER ENDPOINTS
// app.post('/api/users', uc.createUser );
// app.get('/api/users', uc.getUsers );
// app.get('/api/users/:id', uc.getUser );
// app.put('/api/users/:id', uc.updateUser );
// app.delete('/api/users/:id', uc.deleteUser );

// // FRIEND ENDPOINTS
// app.get('/api/friend/:id', fc.getOne);
// app.get('/api/friend/list', fc.getList);

// // CAMPAIGN ENDPOINTS
// app.post('/api/campaign', cc.createCamp );
// app.get('/api/campaign', cc.getCamps );
// app.get('/api/campaign/:id', cc.getCamp );
// app.put('/api/campaign/:id', cc.updateCamp );
// app.delete('/api/campaign/:id', cc.deleteCamp );

// // AMOUNT ENDPOINTS
// app.post('/api/donor', ac.createAmt );
// app.get('/api/donor/:id', ac.getAmts );



app.listen(port, ()=> console.log(`listening on port ${port}`));    