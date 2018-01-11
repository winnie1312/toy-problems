
let available = ['pilots', 'flightAttendants', 'engineers', 'medicalAssistance', 'sensorOperators'];
let required = 10;
const meetsStaff = (a, b) => {
  if (available.length > required) {
      console.log("true he he")
      return true;
      } else {
      console.log("false he he")
      return false;
      }
};

const test = meetsStaff(available, required);

if (test) {
  console.log('sexy bu');
}
  console.log('fat mino');
