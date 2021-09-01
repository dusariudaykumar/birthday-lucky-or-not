const dateOfBirth = document.querySelector("#dateOfBirth");
const luckyNumber = document.querySelector("#luckyNumber");
const checkBtn = document.querySelector("#checkBtn");
const output = document.querySelector("#output");

// function checkBirthdayIsLucky() {
//   const dob = dateOfBirth.value;
//   console.log(dob);
// }
// checkBtn.addEventListener("click", checkBirthdayIsLucky);

function compareValues(sum, luckyNumber) {
  if (sum % luckyNumber === 0) {
    output.innerText = "🎉Your Birthday is Lucky ✨🤩🎉";
    output.style.color = "green";
  } else {
    output.innerText = "Your birthday is not lucky 🙁";
    output.style.color = "red";
  }
}
function checkBirthdayIsLucky() {
  const dob = dateOfBirth.value;
  const sum = calculateSum(dob);
  console.log(sum);
  if (sum && dob) {
    compareValues(sum, luckyNumber.value);
  } else {
    output.innerText = "please fill all the boxes";
  }
}
function calculateSum(dob) {
  dob = dob.replaceAll("-", "");
  var sum = 0;
  for (var i = 0; i < dob.length; i++) {
    sum = sum + Number(dob.charAt(i));
  }
  console.log(dob);
  return sum;
}
checkBtn.addEventListener("click", checkBirthdayIsLucky);
