import { cleanEnv, port, str } from 'envalid'

const env = cleanEnv(process.env, {
  PORT: port(),
  MONGO_CONNECT_STRING: str(),
})

export default env
