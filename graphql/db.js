export const people = [
  {
    id: "1",
    name: "crimson",
    age: 27,
    gender: "male",
  },
  {
    id: "2",
    name: "Tree",
    age: 27,
    gender: "male",
  },
  {
    id: "3",
    name: "Nate",
    age: 27,
    gender: "male",
  },
  {
    id: "4",
    name: "River",
    age: 27,
    gender: "male",
  },
];

export const getById = (id) => {
  const filterePeople = people.filter((person) => people.id === id);
  return filterePeople[0];
};
