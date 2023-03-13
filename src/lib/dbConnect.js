import mongoose from "mongoose";


mongoose.set('strictQuery', true)


const uri = process.env.DB_URI


let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect () {
  if (cached.conn) {
    return cached.conn
  }

  if (!cached.promise) {
    const opts = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      bufferCommands: false
      // bufferMaxEntries: 0,
      // useFindAndModify: true,
      // useCreateIndex: true
    }

    cached.promise = mongoose.connect(uri, opts).then(mongoose => {
      return mongoose
    })
  }
  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect

// import mongoose from "mongoose";

// export async function dbConnect() {
//   if (mongoose.connection.readyState === 1) {
//     return mongoose.connection.asPromise();
//   }
//   return await mongoose.connect(process.env.DB_URI);
// }