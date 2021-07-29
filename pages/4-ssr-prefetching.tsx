import { useQuery, QueryClient } from "react-query";
import { dehydrate } from "react-query/hydration";
import {
  Header,
  Loader,
  ContactList,
  Contact,
  ListContainer,
} from "../src/components";
import { SSR_PREFETCHING_KEY } from "../src/utils/constants";
import { getContacts } from "../src/utils/contacts";

export default function Prefetching() {
  const {
    data: contacts,
    isLoading,
    isSuccess,
  } = useQuery(SSR_PREFETCHING_KEY, getContacts, { staleTime: 3000 });

  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100vh" }}>
      <Header>Prefecting with React Query</Header>
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

export async function getServerSideProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(SSR_PREFETCHING_KEY, getContacts);

  return {
    props: {
      dehydratedState: dehydrate(queryClient), // will be passed to the page component as props
    },
  };
}
