import useSWR from 'swr';

export function appendResponseHeader(data: any, success = false) {
  return { code: success ? 0 : -1, msg: success ? 'Success' : 'Fail', data: data };
}

export function useFetch(requestURL: string) {
  const { data, error } = useSWR(requestURL, (url: string) => fetch(url).then((res) => res.json()));
  const loading = !data && !error;
  if (data?.code && data.code !== 0) return { data: null, error: true, loading: false };
  return { data: data?.data, error, loading };
}
