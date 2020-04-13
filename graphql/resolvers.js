const crimson = {
  name: "crimson",
  age: 27,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => crimson,
  },
};

export default resolvers;
