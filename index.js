// https://redparts.woocommerce.themeforest.scompiler.ru/theme/?redparts_demo_options=dir%3Acurrent%2Cheader_layout%3Aspaceship%2Ctheme_scheme%3Acurrent%2Cdesktop_use_predefined_variant%3Ayes%2Cdesktop_spaceship_variant%


// https://wpbingosite.com/wordpress/vitic/home-page-7/
// NewSelter
//https://demo.templatetrend.com/magento/MAG777/MAG750/
//https://demo.templatetrend.com/magento/MAG777/MAG750/

const { MongoClient, ServerApiVersion } = require('mongodb');
const express = require('express')
const cors = require('cors');
const app = express()
const jwt = require('jsonwebtoken');
require('dotenv').config()
const port = process.env.PORT || 5000

// Middletare
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
})


const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.qrzlt.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
async function run() {
  try {
    await client.connect()
    const toolsCollection = client.db('toolsMenu').collection('tools');

    app.get("/tools", async (req, res) => {
      const result = await toolsCollection.find().toArray();
      res.send(result)
    })
  }
  catch {

  }
}
run()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})