import * as React from "react";
import {
  Header,
  Loader,
  ContactList,
  Contact,
  ListContainer,
  Page,
  UserHeading,
} from "../src/components";

import { getContacts, getUser } from "../src/utils/contacts";
import { getNotes } from "../src/utils/notes";

export default function ClientSideRendering() {
  const [contacts, setContacts] = React.useState([]);
  const [user, setUser] = React.useState(null);
  const [isContactsLoading, setIsContactsLoading] = React.useState(false);
  const [isUserLoading, setIsUserLoading] = React.useState(false);

  async function loadContacts() {
    setIsContactsLoading(true);
    const resContacts = await getContacts();
    setContacts(resContacts);
    setIsContactsLoading(false);
  }

  async function loadUser() {
    setIsUserLoading(true);
    const resUser = await getUser();
    setUser(resUser);
    setIsUserLoading(false);
  }

  React.useEffect(() => {
    loadContacts();
    loadUser();
  }, []);

  return (
    <Page>
      <Header>Client Side Rendering</Header>
      <ListContainer>
        {isUserLoading ? (
          <Loader />
        ) : (
          <UserHeading>{`${user?.username}'s Address Book - ${user?.email}`}</UserHeading>
        )}

        {isContactsLoading ? (
          <Loader />
        ) : (
          <ContactList>
            {contacts.map((contact) => (
              <Contact key={contact.uuid} contact={contact} color="red" />
            ))}
          </ContactList>
        )}
      </ListContainer>
      {getNotes("csr")}
    </Page>
  );
}
