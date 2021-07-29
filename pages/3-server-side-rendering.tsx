import {
  Header,
  ContactList,
  Contact,
  ListContainer,
  Page,
  Drawer,
} from "../src/components";
import { getContacts } from "../src/utils/contacts";

export default function ServerSideRendering({ contacts = [] }) {
  return (
    <Page>
      <Header>Server Side Rendering</Header>
      <ListContainer>
        <ContactList>
          {contacts.map((contact) => (
            <Contact key={contact.uuid} contact={contact} color="orange" />
          ))}
        </ContactList>
      </ListContainer>
      <Drawer>
        <h2>Server Side Rendering</h2>
        <ul>
          <li>Strictly client-side</li>
        </ul>
      </Drawer>
    </Page>
  );
}

export async function getServerSideProps() {
  return {
    props: { contacts: await getContacts() },
  };
}
