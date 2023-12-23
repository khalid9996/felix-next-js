import mongoose from "mongoose";

const URI = process.env.MONGO_URI;

if (!URI) throw new Error("Please add your Mongo URI to .env");

let clientPromise;

const db = async () => {
  const connect = async () => {
    if (mongoose.connection.readyState) {
      console.log("Found Db in Ready State");
      return mongoose.connection.readyState;
    }
    return await mongoose
      .connect(`${URI}`)
      .then(() => {
        console.log("Successfully connected to database");
      })
      .catch((error) => {
        console.log(`Error connecting to database ${error}`);
      });
  };

  if (process.env.NODE_ENV !== "production") {
    if (!global._mongoClientPromise) {
      global._mongoClientPromise = await connect();
      console.log("Calling DB Connect Method");
    }

    clientPromise = global._mongoClientPromise;
    console.log("Got DB from Global");
  } else {
    clientPromise = await connect();
    console.log("Calling DB Connect Method");
  }
  return clientPromise;
};

export default db;
