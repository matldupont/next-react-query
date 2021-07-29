import {
  Header,
  ContactList,
  Contact,
  ListContainer,
  Page,
  Drawer,
  UserHeading,
} from "../src/components";
import { getContacts, getUser } from "../src/utils/contacts";
import { getNotes } from "../src/utils/notes";

export default function ServerSideRendering({ contacts = [], user = null }) {
  return (
    <Page>
      <Header>Server Side Rendering</Header>
      <ListContainer>
        <UserHeading>{`${user?.username}'s Address Book - ${user?.email}`}</UserHeading>
        <ContactList>
          {contacts.map((contact) => (
            <Contact key={contact.uuid} contact={contact} color="orange" />
          ))}
        </ContactList>
      </ListContainer>
      {getNotes("ssr")}
    </Page>
  );
}

export async function getServerSideProps() {
  return {
    props: { contacts: await getContacts(), user: await getUser() },
  };
}
