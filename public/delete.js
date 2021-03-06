const form = document.querySelector("form");
const response = document.getElementById("response");

form.addEventListener("submit", event => {
  event.preventDefault();
  const slug = form.elements.slug.value;
  const token = form.elements.token.value;
  const body = { slug: slug, token: token };
  fetch("/api/delete", {
    method: "POST",
    body: JSON.stringify(body),
    headers: { "Content-Type": "application/json" }
  })
    .then(response => response.json())
    .then(json => {
      if (json.success === true) {
     const notyferh = new Notyf();
  notyferh.success(`Slug deleted`);
      } else {
                  const notyfer = new Notyf();
  notyfer.error(`An error ocurred: ${json.error}`);
      }
      form.reset();
    });
});
