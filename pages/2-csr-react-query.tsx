import * as React from "react";
import styled from "styled-components";
import { useQuery } from "react-query";
import {
  Header,
  Loader,
  LoaderBox,
  ContactList,
  Contact,
  ListContainer,
  Page,
  UserHeading,
} from "../src/components";
import { CSR_RQ_CONTACTS_KEY, CSR_RQ_USER_KEY } from "../src/utils/constants";
import { getContacts, getUser } from "../src/utils/contacts";
import { getNotes } from "../src/utils/notes";

export default function ClientSideRendering() {
  const {
    data: contacts,
    isLoading: isContactsLoading,
    isSuccess,
    isFetching: isContactsFetching,
  } = useQuery(CSR_RQ_CONTACTS_KEY, getContacts, {
    staleTime: 1000,
    refetchInterval: 3000,
  });

  const { data: user, isLoading: isUserLoading } = useQuery(
    CSR_RQ_USER_KEY,
    getUser
  );

  return (
    <Page>
      <Header>Client Side Rendering with React Query</Header>
      <ListContainer>
        {isUserLoading ? (
          <Loader />
        ) : (
          <UserHeading>{`${user?.username}'s Address Book - ${user?.email}`}</UserHeading>
        )}
        <LoaderBox>
          {(isContactsLoading || isContactsFetching) && <Loader />}
        </LoaderBox>
        {isSuccess && (
          <ContactList>
            {contacts.map((contact) => (
              <Contact key={contact.uuid} contact={contact} color="blue" />
            ))}
          </ContactList>
        )}
      </ListContainer>
      {getNotes("csr-rq")}
    </Page>
  );
}
