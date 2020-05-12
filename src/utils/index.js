export function getTime(timestamp) {
  function to24(i) {
    if (i < 10) {
      i = "0" + i;
    }
    return i;
  }
  const date = new Date(timestamp * 1000);
  const h = date.getHours();
  let m = date.getMinutes();
  m = to24(m);

  return `${h}:${m}`;
}

export function toQueryString(queries) {
  return Object.keys(queries)
    .map((key) => key + "=" + queries[key])
    .join("&");
}

export function generateRandomLonLat() {
  function generate(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
    // .toFixed() returns string, so ' * 1' is a trick to convert to number
  }
  return {
    lon: generate(-180, 180, 3),
    lat: generate(-90, 90, 3),
  };
}
