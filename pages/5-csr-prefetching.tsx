import * as React from "react";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  Header,
  Loader,
  ContactList,
  Contact,
  ListContainer,
  Page,
  Drawer,
} from "../src/components";
import { CSR_PREFETCHING_KEY } from "../src/utils/constants";
import { getContacts } from "../src/utils/contacts";

export default function ClientSideRendering() {
  const {
    data: contacts,
    isLoading,

    isSuccess,
  } = useQuery(CSR_PREFETCHING_KEY, getContacts, { staleTime: 3000 });

  return (
    <Page>
      <Header>CSR Prefecting with React Query</Header>
      <ListContainer>
        {isLoading && <Loader />}
        {isSuccess && (
          <ContactList>
            {contacts.map((contact) => (
              <Contact key={contact.uuid} contact={contact} color="green" />
            ))}
          </ContactList>
        )}
      </ListContainer>
      <Drawer>
        <h2>CSR Prefecting with React Query</h2>
        <ul>
          <li>Strictly client-side</li>
        </ul>
      </Drawer>
    </Page>
  );
}
