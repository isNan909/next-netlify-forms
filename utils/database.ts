const MongoClient = require('mongodb').MongoClient;
const client = new MongoClient(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function connect() {
  if (!client.connect()) await client.connect();
  const db = client.db("netlify-forms");
  return { db, client };
}

export { connect };