const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(process.env.DB_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.isConnected()) await client.connect();
  const db = client.db("netlify-forms");
  return { db, client };
}

export { connect };