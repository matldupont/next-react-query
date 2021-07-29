import { Header, ContactList, Contact, ListContainer } from "../src/components";
import { getContacts } from "../src/utils/contacts";

export default function ServerSideRendering({ contacts = [] }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header>Server Side Rendering</Header>
      <ListContainer>
        <ContactList>
          {contacts.map((contact) => (
            <Contact key={contact.uuid} contact={contact} />
          ))}
        </ContactList>
      </ListContainer>
    </div>
  );
}

export async function getServerSideProps() {
  return {
    props: { contacts: await getContacts() },
  };
}
