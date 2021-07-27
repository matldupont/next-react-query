import faker from "faker";

function getContact() {
  const { firstName, lastName } = faker.name;
  const { streetAddress, city, state, country, zipCode } = faker.address;
  return {
    uuid: faker.datatype.uuid(),
    firstName: firstName(),
    lastName: lastName(),
    address: {
      streetAddress: streetAddress(),
      city: city(),
      state: state(),
      country: country(),
      zipCode: zipCode(),
    },
  };
}

function timeout(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export default async function handler(req, res) {
  await timeout(2000);
  const contacts = [...new Array(50)].map(getContact);

  res.status(200).json(contacts);
}
