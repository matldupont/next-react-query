import faker from "faker";

function getContact() {
  const { firstName, lastName } = faker.name;
  const { streetAddress, streetName, streetSuffix, city, state, country } =
    faker.address;
  return {
    firstName: firstName(),
    lastName: lastName(),
    address: {
      streetAddress: streetAddress(),
      city: city(),
      state: state(),
      country: country(),
    },
  };
}

export default function handler(req, res) {
  const contacts = [...new Array(50)].map(getContact);

  res.status(200).json(contacts);
}
