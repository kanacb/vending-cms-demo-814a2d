import { faker } from "@faker-js/faker";
export default (count) => {
  let data = [];
  for (let i = 0; i < count; i++) {
    const fake = {
      name: faker.name.fullName(),
      email: faker.internet.email(),
    };
    data = [...data, fake];
  }
  return data;
};
