const token =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmNWFlYzE3MGNkMWExNmI2MGIyZjk2MCIsImlhdCI6MTU5OTc5NDE5OX0.1KG54yYyBbAbjbvXOhsWfsKwM3x4rUvHyL2f7L4R5IY';
const apiRoomBuiding =
  'http://118.69.123.51:5000/fis/api/edu/create_new_course';

export async function createNewCourseApi(
  courseName,
  trainer,
  startedDate,
  endedDate,
  buildingId,
  roomId,
) {
  var myHeaders = new Headers();
  myHeaders.append('Content-Type', 'application/json');
  myHeaders.append('Authorization', 'Bearer ' + token);

  let data = {
    courseName: courseName,
    trainer: trainer,
    startedDate: startedDate,
    endedDate: endedDate,
    buildingId: buildingId,
    roomId: roomId,
  };
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: JSON.stringify(data),
  };
  const response = (await fetch(apiRoomBuiding, requestOptions)).json();

  return response;
}
