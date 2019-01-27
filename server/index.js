const express = require('express')
const morgan = require('morgan')
const { db } = require('./models')
const lists = require('./lists')
const app = express()
const path = require('path');
const { main } = require('./views')

const PORT = 3000;
const SYNC_FORCE = false;

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, 'static')))
app.use('/lists', lists)

app.get('/', (req, res) => {
  res.send(main)
})

// eslint-disable-next-line handle-callback-err
app.use((err, req, res, next) => {
  // TODO error handling
  res.status(500).send(`We're sorry, we're so sorry. An error occurred`)
})

async function initDB() {
  try {
    await db.sync( { force: SYNC_FORCE } );
  } catch (err) {
    console.log('DB Sync error', err)
  }
}

initDB()
app.listen(PORT, () => { console.log(`Application listening on port ${PORT}`) })