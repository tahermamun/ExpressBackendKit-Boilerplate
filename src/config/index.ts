import dotenv from 'dotenv'
import path from 'path'

dotenv.config({ path: path.join(process.cwd(), '.env') })
export default {
  port: process.env.PORT,
  mongodb_database_url: process.env.DATABASE_URL_MONGODB,
}
