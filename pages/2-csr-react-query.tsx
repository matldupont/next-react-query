import * as React from "react";
import { useQuery } from "react-query";
import {
  Header,
  Loader,
  ContactList,
  Contact,
  ListContainer,
  Page,
  Drawer,
} from "../src/components";
import { CSR_REACT_QUERY } from "../src/utils/constants";
import { getContacts } from "../src/utils/contacts";

export default function ClientSideRendering() {
  const {
    data: contacts,
    isLoading,
    isSuccess,
  } = useQuery(CSR_REACT_QUERY, getContacts, { staleTime: 3000 });

  return (
    <Page>
      <Header>Client Side Rendering with React Query</Header>
      <ListContainer>
        {isLoading && <Loader />}
        {isSuccess && (
          <ContactList>
            {contacts.map((contact) => (
              <Contact key={contact.uuid} contact={contact} color="blue" />
            ))}
          </ContactList>
        )}
      </ListContainer>
      <Drawer>
        <h2>Client Side Rendering with React Query</h2>
        <ul>
          <li>Strictly client-side</li>
        </ul>
      </Drawer>
    </Page>
  );
}
