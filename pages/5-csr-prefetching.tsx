import * as React from "react";
import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  Header,
  Loader,
  ContactList,
  Contact,
  ListContainer,
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
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header>Client Side Rendering</Header>
      <ListContainer>
        {isLoading && <Loader />}
        {isSuccess && (
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
