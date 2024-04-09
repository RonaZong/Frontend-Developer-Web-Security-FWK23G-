async function main() {
  const resp = await fetch("http://localhost:3000/notes");
  const notes = await resp.json();
  console.log(notes);
}
main();
