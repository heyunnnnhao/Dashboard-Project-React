import useSWR from 'swr';

type useFetchOptions = {
  latency?: number;
  name?: string;
};

type useFetchResopnse = {
  data: Array<any>;
  error: boolean;
  loading: boolean;
};

const fetcher = async (url: string, componentName: string) => {
  const res = await fetch(url);

  if (!res.ok) {
    const error: any = new Error(`An error occurred while fetching ${componentName}.`);
    error.info = await res.json();
    error.status = res.status;
    throw error;
  }

  return res.json();
};

export function useFetch(requestURL: string, options: useFetchOptions): useFetchResopnse {
  const { latency = 0, name = 'the data' } = options;

  const { data = null, error = false } = useSWR(requestURL, () => fetcher(requestURL, name));

  const loading = !data && !error;

  return { data, error, loading };
}
