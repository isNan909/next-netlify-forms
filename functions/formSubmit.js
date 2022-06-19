const connect = require("../utils/database");

exports.handler = async function (event) {
  const { query } = JSON.parse(event.body);
  try {
    const { fullName, companyEmail, phoneNumber, companyWebsite, companySize } = query;
    console.log(fullName, companyEmail, phoneNumber, companyWebsite, companySize);
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
      body: JSON.stringify({
        message: 'Your form has been submitted successfully!',
      })
    }
  }
  catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Something went wrong!',
      })
    }
  }
}