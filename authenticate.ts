var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.serializeUser((user, done) => 
{
    done(null, user.id);
});

passport.deserializeUser((user, done) =>
{
    done(null, user);
});

passport.use(new GoogleStrategy({
    clientID: '437698598752-rt2t2qejtt5bsbs8214d4l7udnoa6age.apps.googleusercontent.com',
    clientSecret: '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',
    callbackURL: 'http://localhost:3001/google/callback'
},
function (_accessToken, _refreshToken, profile, cb)
{
    cb(null, profile);
}
));