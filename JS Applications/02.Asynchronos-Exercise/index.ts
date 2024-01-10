interface User {
  name: string;
  age: number;
}

(async () => {
  const userData: User[] = [
    {
      name: 'Boyan',
      age: 25,
    },
    {
      name: 'Hristiqn',
      age: 51,
    },
  ];

  const getUserData = () =>
    new Promise<User[]>((resolve, reject) => {
      setTimeout(() => resolve(userData), Math.random() * 2 * 1000);
    });

  const getBoyan = () =>
    new Promise((resolve) => setTimeout(() => resolve(userData[0]), 1500));

  const getBoyanAge = () =>
    new Promise((resolve) => setTimeout(() => resolve(userData[0].age), 1500));

  //   getUserData()
  //     .then((users) => {

  //       return users[0];

  //       console.log("USERS LOADED");
  //     })
  //     .then((user) => {
  //       return user.age;
  //     })
  //     .then((age) => {
  //       console.log(age);
  //     });

  const users = await getUserData();

  const boyan = await getBoyan();

  const boyanAge = await getBoyanAge();

  console.log(users);
  console.log(boyan);
  console.log(boyanAge);

  //   console.log("USERS LOADED");

  //   console.log("AFTER USERS LOADED");
})();
