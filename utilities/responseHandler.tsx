export function appendHeader(data: any, success = false) {
  return { code: success ? 0 : -1, msg: success ? 'SUCCESS' : 'FAIL', data: data };
}
