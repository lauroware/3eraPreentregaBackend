// config.js
import dotenv from "dotenv";
dotenv.config();

const config = {
  auth: {
    clientID: "Iv1.6d67e51f461b5bcc",
    clientSecret: "d943803e935cc45f54dc69b48f22bf89c7010eb8",
    callbackURL: "http://localhost:8080/api/session/githubcallback",
  },
  apiserver: {
    port: process.env.PORT,
  },
  persistence: process.env.PERSISTENCE,
  mongo: {
    uri: process.env.MONGO_URI,
    dbname: process.env.MONGO_DB_NAME,
  },
  dbName: process.env.DB_NAME,
  dbUser: process.env.DB_USER,
  dbPassword: process.env.DB_PASSWORD,
  SESSION_SECRET: process.env.SESSION_SECRET,
};

export default config; // Exportación por defecto
