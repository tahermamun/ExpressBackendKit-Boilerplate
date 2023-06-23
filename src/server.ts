import mongoose from 'mongoose'
import app from './app'
import config from './config'

async function bootstrap() {
  try {
    await mongoose.connect(config.mongodb_database_url as string)
    console.log('🟢🌿Database is connected successfully[MongoDB]')
    app.listen(config.port, () => {
      console.log('Example app listening on port ' + config.port)
    })
  } catch (err) {
    console.log('🔴🌿Failed to connect to database[MongoDB]', err)
  }
}
bootstrap()
