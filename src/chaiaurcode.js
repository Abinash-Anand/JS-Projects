console.log("Hello World");
const spanElement = document.querySelectorAll(".button");
console.log(spanElement);
// const array = Array.prototype.slice.call(spanElement);
// console.log(array);

// spanElement.forEach((spanId) => {
//   console.log(spanElement[spanId].id);
// });
spanElement.forEach((e) => {
  console.log(e);
  e.addEventListener("click", function () {
    document.body.style.backgroundColor = e.id;

    document.body.style.color = "white";

    if (e.id === "white" || e.id === "yellow") {
      document.body.style.color = "black";
    }
    console.log(e.addEventListener);
  });
});
