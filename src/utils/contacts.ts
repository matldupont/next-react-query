const host =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://next-react-query-matldupont.vercel.app";

export async function getContacts() {
  const result = await fetch(`${host}/api/contacts`);
  return await result.json();
}
