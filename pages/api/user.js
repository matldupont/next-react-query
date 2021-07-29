import faker from "faker";

export default async function handler(req, res) {
  const user = {
    username: faker.internet.userName(),
    name: faker.name.findName(),
    email: faker.internet.email(),
  };

  res.status(200).json(user);
}
