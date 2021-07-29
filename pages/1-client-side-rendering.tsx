import * as React from "react";
import {
  Header,
  Loader,
  ContactList,
  Contact,
  ListContainer,
  Page,
  Drawer,
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
    <Page>
      <Header>Client Side Rendering</Header>
      <ListContainer>
        {isLoading && <Loader />}
        {!isLoading && (
          <ContactList>
            {contacts.map((contact) => (
              <Contact key={contact.uuid} contact={contact} color="red" />
            ))}
          </ContactList>
        )}
      </ListContainer>
      <Drawer>
        <h2>Client Side Rendering</h2>
        <ul>
          <li>Strictly client-side</li>
        </ul>
      </Drawer>
    </Page>
  );
}
