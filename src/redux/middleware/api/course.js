const apiCourse = 'http://10.86.224.37:5001/api/edu/get_all_course';

export async function get_Course() {
  var myHeaders = new Headers();
  myHeaders.append(
    'Authorization',
    'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWFlYzE3MGNkMWExNmI2MGIyZjk2MCIsImlhdCI6MTYwMDY1Nzk5M30.rwYpcN7vF4J1fCkVt43ArTC73nGLgS-FX7t3J5dAvTA',
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
