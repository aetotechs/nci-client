const getNavigationUrl = (location: any, to: any) => {
  const currentUrl = location.pathname + location.search;
  return `/${to}?redirect_url=${encodeURIComponent('/#' + currentUrl)}`;
};

const getCurrentUrl = (location: any) => {
  return location.pathname + location.search;
};

export { getNavigationUrl, getCurrentUrl };
