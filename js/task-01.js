const user = {
    name: 'Mango',
    age: 20,
    hobby: 'html',
    premium: true,
  };

  user.mood = 'happy';
  user.hobby = 'skydiving';
  user.premium = false;

  // for(const key in user) {
  //   console.log(`${key}: ${user[key]}`);
  // }

  const keys = Object.keys(user);

  for(const key of keys) {
    console.log(`${key}: ${user[key]}`);
  }