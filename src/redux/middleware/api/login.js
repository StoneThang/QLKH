const apilogin = 'http://118.69.123.51:5000/fis/api/login';

export async function postLogin(user, password) {
  let data = {
    username: user,
    password: password,
  };
  return await fetch(apilogin, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((result) => {
      return result;
    })
    .catch((error) => {
      console.error(error);
    });
}
