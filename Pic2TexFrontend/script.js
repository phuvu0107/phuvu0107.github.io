const navBarEl = document.querySelector(".navBar");
const userEl = document.querySelector(".user-side");
const outputEl = document.querySelector(".output");
const form = document.querySelector(".form");
const image_input = document.querySelector("#image-input");

var uploaded_image = "";

//upload file
image_input.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploaded_image = reader.result;
    document.querySelector(
      "#display-image"
    ).style.backgroundImage = `url(${uploaded_image})`;
  });
  reader.readAsDataURL(this.files[0]);
});

//submit button
form.addEventListener("submit", function (e) {
  e.preventDefault;

  const formData = new FormData(this);
  fetch("submit.php", {
    method: "post",
    body: formData,
  })
    .then(function (response) {
      return response.text;
    })
    .then(function (text) {
      console.log(text);
    })
    .catch(function (error) {
      console.error(error);
    });
});
