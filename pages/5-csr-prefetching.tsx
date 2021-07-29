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
  UserHeading,
  LoaderBox,
} from "../src/components";
import {
  CSR_PREFETCH_CONTACTS_KEY,
  CSR_PREFETCH_USER_KEY,
} from "../src/utils/constants";
import { getContacts, getUser } from "../src/utils/contacts";
import { getNotes } from "../src/utils/notes";

export default function ClientSideRendering() {
  const {
    data: contacts,
    isLoading: isContactsLoading,
    isSuccess,
    isFetching: isContactsFetching,
  } = useQuery(CSR_PREFETCH_CONTACTS_KEY, getContacts, {
    staleTime: 1000,
    refetchInterval: 3000,
  });

  const { data: user, isLoading: isUserLoading } = useQuery(
    CSR_PREFETCH_USER_KEY,
    getUser
  );

  return (
    <Page>
      <Header>CSR Prefecting with React Query</Header>
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
              <Contact key={contact.uuid} contact={contact} color="green" />
            ))}
          </ContactList>
        )}
      </ListContainer>
      {getNotes("csr-prefetch")}
    </Page>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(CSR_PREFETCH_USER_KEY, getUser);

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // will be passed to the page component as props
    },
  };
}
