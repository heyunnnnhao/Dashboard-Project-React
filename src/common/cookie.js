export const getCookie = (key) => {
  const rule = new RegExp(`(?:(?:^|.*;)\\s*${encodeURIComponent(key).replace(/[-.+*]/g, '\\$&')}\\s*\\=\\s*([^;]*).*$)|^.*$`);
  return document.cookie.replace(rule, '$1') || null;
};

export const setCookie = (key, value, options) => {
  options = options || {};
  if (!value) {
    value = '';
    options.expires = -365;
  } else {
    value = escape(value);
  }
  if (options.expires) {
    var d = new Date();
    d.setDate(d.getDate() + options.expires);
    value += '; expires=' + d.toUTCString();
  }
  if (options.domain) {
    value += '; domain=' + options.domain;
  }
  if (options.path) {
    value += '; path=' + options.path;
  }
  document.cookie = key + '=' + value;
};
