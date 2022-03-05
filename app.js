const fetched = new Fetch();
const ui = new UI();

const button = document.getElementById("submit");
const search = document.getElementById("searchUser");

function fetchData(fetchData) {
  fetched.getCurrent(fetchData).then((data) => {
    ui.populateUI(data);
    ui.saveToLS(data);
    console.log(data.weather[0]);
  });
}

search.onkeyup = (event) => {
  let currentVal = search.value;

  if (currentVal === "") noValue();

  if (currentVal.trim() !== 0) button.classList.add("active");

  if (event.key === "Enter") {
    currentVal = search.value;
    fetchData(currentVal);
  }
};

function noValue() {
  alert("search for a city");
}

button.addEventListener("click", () => {
  const currentVal = search.value;
  if (currentVal === "") noValue();
  fetchData(currentVal);
});

window.addEventListener("DOMContentLoaded", () => {
  fetched.getCurrent(ui.defaultCity).then((data) => {
    ui.populateUI(data);
    console.log(data.weather[0]);
    //ui.saveToLS(data);
  });
});

//------------------------------ SAND BOX ------------------------------------
//why would anyone implement this like the first greet, instead of the second?
//UPDATE - ignore comment above, the first greet is implemented with CLOSURE
// const greet = () => {
//   const prefix = "Mr";
//   return (name) => {
//     console.log(`${prefix} ${name}, welcome!`);
//   };
// };

// console.log(greet()("Jack"));

// const greet2 = (name) => {
//   const prefix = "Mr";
//   console.log(`${prefix} ${name}, welcome!`);
// };

// console.log(greet2("Jack2"));
