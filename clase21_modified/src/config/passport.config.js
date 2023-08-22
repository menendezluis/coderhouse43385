import passport from "passport";
import GitHubStrategy from "passport-github2";
import userService from "../model/user.model.js";

const GITHUB_CLIENT_ID = "Iv1.01084b5489284e69";
const GITHUB_CLIENT_SECRET = "e882e81f76f1fb3a4df021baa52fa11b35740a93";
const initializePassport = () => {
  passport.use(
    "github",
    new GitHubStrategy(
      {
        clientID: GITHUB_CLIENT_ID,
        clientSecret: GITHUB_CLIENT_SECRET,
        callbackURL: `http://localhost:3838/api/sessions/githubcallback`,
      },
      async (accessToken, refreshToken, profile, done) => {
        try {
          console.log(profile);
          let user = await userService.findOne({
            email: profile?.emails[0]?.value,
          });
          if (!user) {
            const newUser = {
              first_name: profile.displayName,
              last_name: profile.displayName,
              email: profile.emails[0].value,
              age: 18,
              password: "",
            };
            let result = await userService.create(newUser);
            done(null, result);
          } else {
            done(null, user);
          }
        } catch (err) {
          done(err, null);
        }
      }
    )
  );
  /*passport.serializeUser((user, done) => {
    done(null, user._id);
  });

  passport.deserializeUser(async (id, done) => {
    try {
      let user = await userService.findById(id);
      done(null, user);
    } catch (err) {
      done(err, null);
    }
  });*/
};

export default initializePassport;
