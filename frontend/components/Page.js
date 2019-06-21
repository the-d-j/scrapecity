import { useEffect, useState } from 'react';
import { ScrapeProvider } from './ScrapeContext';

// Custom hook wrapped in an anon fn
// as useEffect expects a fn to be returned
function useScrapes() {
  const [ scrapes, setScrapes ] = useState({
    twitter: [],
    instagram: [],
  });

  useEffect(function() {
    (async () => {
      console.log('Mounting or Updating');
      const res = await fetch('http://localhost:2093/data');
      const data = await res.json();
      // console.log(data);
      setScrapes(data);
    })();
  }, []);
  return scrapes;
}

export default function Page({children}) {
  const scrapes = useScrapes();
  return (
    <ScrapeProvider
        value={{
         scrapes,
        }}
      >
      <div className="page">{children}</div>
    </ScrapeProvider>
  );
}