require('dotenv').config();

const express = require('express'),
    cors = require('cors'),
    bodyParser = require('body-parser'),
    session = require('express-session'),
    passport = require('passport'),
    Auth0Strategy = require('passport-auth0'),
    massive = require('massive'),
    cc = require('./campaigns_controller'),
    ac = require('./donors_controller'),
    stripe = require('stripe')('sk_test_z1qkTOZCBRBRxUrzRdN69F0Y'),
    path = require('path'),
    port = 3035;

const app = express();
app.use( express.static( `${__dirname}/../build` ) );
app.use(bodyParser.json());
app.use(cors());
app.use(session({
    secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true
}));
app.use(passport.initialize());
app.use(passport.session());

massive(process.env.CONNECTION_STRING).then((db) => {
    app.set('db', db);
})

passport.use(new Auth0Strategy({
    domain: process.env.AUTH_DOMAIN,
    clientID: process.env.AUTH_CLIENT_ID,
    clientSecret: process.env.AUTH_CLIENT_SECRET,
    callbackURL: process.env.AUTH_CALLBACK
}, function (accessToken, refreshToken, extraParams, profile, done) {

    const db = app.get('db');
    const userData = profile._json;
    db.find_user([userData.identities[0].user_id]).then(user => {
        if (user[0]) {
            return done(null, user[0].user_id);
        } else {
            db.create_user([
                userData.name,
                userData.email,
                userData.picture,
                userData.identities[0].user_id
            ]).then(user => {
                return done(null, user[0].user_id)
            })
        }

    })
}));

passport.serializeUser(function (id, done) {
    done(null, id)
});
passport.deserializeUser(function (id, done) {
    app.get('db').find_session_user([id]).then(user => {
        done(null, user[0]); // id or profile info put on req.user
    })
});

app.get('/auth', passport.authenticate('auth0'));
app.get('/auth/callback', passport.authenticate('auth0', {
    successRedirect: process.env.SUCCESS_REDIRECT,
    failureRedirect: '/auth'
}));
app.get('/auth/me', function (req, res) {
    if (req.user) {
        return res.status(200).send(req.user)
    } else {
        res.status(401).send('Unauthorized: Need to log in.')
    }
});
app.get('/logout', function (req, res) {
    req.logOut();
    return res.redirect(process.env.SUCCESS_LOGOUT)
});


// // USER ENDPOINTS
// app.post('/api/users', uc.createUser );
// app.get('/api/users', uc.getUsers );
// app.get('/api/users/:id', uc.getUser );
// app.put('/api/users/:id', uc.updateUser );
// app.delete('/api/users/:id', uc.deleteUser );

// CAMPAIGN ENDPOINTS
app.post('/api/campaign', cc.createCamp);
app.get('/api/campaigns', cc.getCamps);
app.get('/api/campaign/:id', cc.getCamp);
app.put('/api/campaign/:id', cc.updateCamp);
app.delete('/api/campaign/:id', cc.deleteCamp);

// DONATION ENDPOINTS
app.post('/api/donation', ac.addDonation );
// app.get('/api/donations', ac.getDonations );
// app.get('/api/donation/:id', ac.getDonation );

// // COMMENTS ENDPOINTS
// app.post('/api/comment', ac.addDonation );
// app.get('/api/comments', ac.getDonations );
// app.get('/api/comment/:id', ac.getDonation );
// app.delete('/api/commentn/:id', cc.deleteComment);

app.post('/api/payment', function (req, res, next) {
    //convert amount to pennies
    const amountArray = req.body.amount.toString().split('');
    const pennies = [];
    for (var i = 0; i < amountArray.length; i++) {
        if (amountArray[i] === ".") {
            if (typeof amountArray[i + 1] === "string") {
                pennies.push(amountArray[i + 1]);
            } else {
                pennies.push("0");
            }
            if (typeof amountArray[i + 2] === "string") {
                pennies.push(amountArray[i + 2]);
            } else {
                pennies.push("0");
            }
            break;
        } else {
            pennies.push(amountArray[i])
        }
    }
    const convertedAmt = parseInt(pennies.join(''));

    const charge = stripe.charges.create({
        amount: convertedAmt, // amount in cents, again
        currency: 'usd',
        source: req.body.token.id,
        description: 'Test charge from react app'
    }, function (err, charge) {
        if (err) return res.sendStatus(500)
        return res.sendStatus(200);
        // if (err && err.type === 'StripeCardError') {
        //   // The card has been declined
        // }
    });
});


app.get('*', (req, res)=>{
  res.sendFile(path.join(__dirname, '../build/index.html'));
})


app.listen(port, () => console.log(`listening on port ${port}`));    
