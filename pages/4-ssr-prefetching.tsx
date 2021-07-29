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
  SSR_PREFETCH_CONTACTS_KEY,
  SSR_PREFETCH_USER_KEY,
} from "../src/utils/constants";
import { getContacts, getUser } from "../src/utils/contacts";
import { getNotes } from "../src/utils/notes";

export default function Prefetching() {
  const {
    data: contacts,
    isLoading: isContactsLoading,
    isSuccess,
    isFetching: isContactsFetching,
  } = useQuery(SSR_PREFETCH_CONTACTS_KEY, getContacts, {
    staleTime: 1000,
    refetchInterval: 3000,
  });

  const { data: user, isLoading: isUserLoading } = useQuery(
    SSR_PREFETCH_USER_KEY,
    getUser
  );

  return (
    <Page>
      <Header>SSR Prefecting with React Query</Header>
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
      {getNotes("ssr-prefetch")}
    </Page>
  );
}

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(SSR_PREFETCH_CONTACTS_KEY, getContacts);
  await queryClient.prefetchQuery(SSR_PREFETCH_USER_KEY, getUser);

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // will be passed to the page component as props
    },
  };
}
