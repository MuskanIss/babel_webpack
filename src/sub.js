export default function onSubmit(e) {
  e.preventDefault();
  let val = document.getElementById("enNote").value;
  let div = document.createElement("div");
  div.textContent = val;
  document.getElementById("AddNotes").appendChild(div);
}
