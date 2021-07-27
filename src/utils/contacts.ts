export async function getContacts() {
  const result = await fetch("http://localhost:3000/api/contacts");
  return await result.json();
}
