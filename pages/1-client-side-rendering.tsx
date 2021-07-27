import * as React from "react";
import {
  Header,
  Loader,
  ContactList,
  Contact,
  ListContainer,
} from "../src/components";
import { getContacts } from "../src/utils/contacts";

export default function ClientSideRendering() {
  const [contacts, setContacts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);

  async function loadContacts() {
    setIsLoading(true);
    const resContacts = await getContacts();
    setContacts(resContacts);
    setIsLoading(false);
  }

  React.useEffect(() => {
    loadContacts();
  }, []);

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header>Client Side Rendering</Header>
      <ListContainer>
        {isLoading && <Loader />}
        {!isLoading && (
          <ContactList>
            {contacts.map((contact) => (
              <Contact key={contact.uuid} contact={contact} />
            ))}
          </ContactList>
        )}
      </ListContainer>
    </div>
  );
}
