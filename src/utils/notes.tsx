import { Drawer, DrawerList } from "../components";

const notes = {
  csr: {
    title: "Client-side Rendering",
    points: [
      "Traditional Single Page Applications",
      "Download HTML, then CSS/JS.. then fetch data 👎",
      "Horrid experience on a slow network 🤬",
      "Blank page until the JS catches up ⛔️",
      "Static site generation can help 🤔 ",
      "Fetch API, axios, etc...",
      "Fetch data and store in App/Component state",
      "Loaders help with the UX",
      "Extremely reliant on your state management strategy",
      "Source of truth can be confusing",
    ],
  },
  "csr-rq": {
    title: "Client-side Rendering with React Query",
    points: [
      "Based on 'stale-while-revalidate' HTTP caching policy (like swr.js)",
      "Unopinionated data fetching (REST/GraphQL/whatever...)",
      "Simple API - useQuery and useMutation 🔥",
      "No state management necessary 🥲",
      "Client-side caching 🙌",
      "Server is the real source of truth 🔎",
      "Fetch state, polling, cache invalidation, retry logic, etc...",
      "Great, but still a traditional SPA. We can do better!",
    ],
  },
  ssr: {
    title: "Server-side Rendering",
    points: [
      "Quickly process data on the server* 🏃💨",
      "A breeze for SEO and crawlers 🕷",
      "Best for UX where data must be visible on first paint 🎨",
      "Universal (Isomorphic) React 😎",
      "Loads HTML/CSS, then Hydrates in a full-blown React app 🚰",
      "Needs state management, refresh calls, etc...",
      "Slow navigation for expensive page computations 💤",
      "Loaders on navigation 🤷",
    ],
  },
  "ssr-prefetch": {
    title: "SSR Prefetching with React Query",
    points: [
      "Oooohhh... getting there! ",
      "Loading data on first paint 🎨",
      "Leveraging client-side cache",
      "Minimal code duplication for huge benefits 💪",
      "Fancy, but still a bad navigation UX for slow calls 😒",
    ],
  },
  "csr-prefetch": {
    title: "SSR and CSR Prefetching with React Query",
    points: [
      "Best of both worlds!! 🎉",
      "Prefetch your expensive data",
      "SSR your fast data",
      "A deliberate mix of solutions",
    ],
  },
};

export function getNotes(id: string) {
  const currentNotes = notes[id];

  if (!currentNotes) return null;

  const { title, points } = currentNotes;
  return (
    <Drawer>
      <h2>{title}</h2>
      <DrawerList>
        {points.map((point) => (
          <li key={point}>{point}</li>
        ))}
      </DrawerList>
    </Drawer>
  );
}
