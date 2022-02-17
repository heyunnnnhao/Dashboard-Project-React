import useSWR from 'swr';

const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error: any = new Error(`An error occurred while fetching.`);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export function useFetch(requestURL: string) {
  const { data = null, error = false } = useSWR(requestURL, () => fetcher(requestURL));

  const loading = !data && !error;

  return { data, error, loading };
}
