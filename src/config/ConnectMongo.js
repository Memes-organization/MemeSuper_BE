import mongoose from 'mongoose'
import env from './envalid'

const MONGO_CONNECT_STRING = env.MONGO_CONNECT_STRING

class ConnectMongo {
  constructor() {
    this.connect()
  }

  connect = function () {
    mongoose
      .connect(MONGO_CONNECT_STRING)
      .then(() => {
        console.log(`- Mongo connection successful`)
      })
      .catch(() => {
        console.log(`- Mongo connection failed`)
      })
  }

  static getInstance = function () {
    if (!ConnectMongo.instance) {
      ConnectMongo.instance = new ConnectMongo()
    }

    return ConnectMongo.instance
  }
}

export default ConnectMongo
