export default async (terminPretrage) => {
  let rezJSON;
  if (terminPretrage != "") {
    let rezSaServera = await fetch(
      `http://universities.hipolabs.com/search?country=${terminPretrage}`
    );
    rezJSON = rezSaServera.json();
  }
  return rezJSON;
};
