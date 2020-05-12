import { generateRandomLonLat, toQueryString, getTime } from "./utils";

describe("Random Geo location", () => {
  it("Longtitude should be in range of -180 and 180, Latitude should be in range of -90 and 90", () => {
    const lonlat = generateRandomLonLat();
    const lonRange = [-180, 180];
    const latRange = [-90, 90];
    expect(lonlat.lon).toBeGreaterThanOrEqual(lonRange[0]);
    expect(lonlat.lon).toBeLessThan(lonRange[1]);
    expect(lonlat.lat).toBeGreaterThanOrEqual(latRange[0]);
    expect(lonlat.lat).toBeLessThan(latRange[1]);
  });
});

describe("Object to query string", () => {
  it("Object of {name: 'zafer'} should equal name=zafer", () => {
    const obj = {
      name: "zafer",
    };
    expect(toQueryString(obj)).toEqual("name=zafer");
  });
});

describe("Time", () => {
  it("epoch time 1587752417 to equal 20:20", () => {
    const timeEpoch = 1587752417;
    expect(getTime(timeEpoch)).toEqual("20:20");
  });
});
