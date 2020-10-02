const apiCourse = 'http://10.86.224.37:5001/api/edu/get_building';

export async function getRoomBuildingApi() {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer' +
      ' eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWFlYzE3MGNkMWExNmI2MGIyZjk2MCIsImlhdCI6MTU5OTc5NDQ1MX0.xJDqnJGZeSBPN3u8TSt5bp4C1lRXGOamNLae8-hvTag',
  );
  var raw = '';

  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    body: raw,
    redirect: 'follow',
  };
  return (await fetch(apiCourse, requestOptions)).json();
}
