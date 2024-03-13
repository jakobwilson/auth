import * as passport from "passport";
import * as PassportLocal from "passport-local";
import * as PassportJWT from "passport-jwt";
import database from "../database";
import { compareHash } from "../utilities/passwords";
import config from "../config";


passport.use(
  new PassportLocal.Strategy(
    {
      usernameField: "email",
      session: false
    },
    async (email, password, done) => {
      try {
        const [authorFound] = await database.authors.find("email", email);
        if (authorFound && compareHash(password, authorFound.password)) {
            
          done(null, authorFound);
        } else {
          done(null, false);
        }
      } catch (error) {
        done(error);
      }
    }
  )
);

interface Payload {
  id: number;
  email: string;
}
export {}
declare global {
  namespace Express{
    export interface User extends Payload{}
  }
}
passport.use(new PassportJWT.Strategy({
  jwtFromRequest: PassportJWT.ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwt.secret
}, (payload: Payload, done) => {
  try {
    done(null, payload);
  } catch (error){
      done(error);
  }
}));