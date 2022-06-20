import { Handler } from "@netlify/functions";
import { connect } from "../utils/database";

const handler: Handler = async (event: any) => {
  const { query } = JSON.parse(event.body);
  const { fullName, companyEmail, phoneNumber, companyWebsite, companySize } = query;
  const { db } = await connect();
  await db.collection("contact").insertOne({
    contacts: {
      Name: fullName,
      Email: companyEmail,
      Phone: phoneNumber,
      Website: companyWebsite,
      Size: companySize,
    },
    createdAt: new Date(),
  });
  return {
    statusCode: 200,
    body: JSON.stringify({ message: `ok` })
  }
};

export { handler };

