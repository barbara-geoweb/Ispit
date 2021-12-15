export default (rezultati) => {
  if (rezultati != undefined && rezultati.length > 0) {
    let i = 0;
    return `
    <h4>Popis sveučilišta u državi ${rezultati[0].country}</h4>
    <ul>
        ${rezultati
          .map((el) => {
            i++;
            if (i < 10) {
              return `<li><a href="${el.web_pages[0]}">${el.name}</a></li>`;
            }
          })
          .join("")}
    </ul>
    `;
  } else {
    return `<p>Neispravan unos. Unesite ispravan naziv<br> države na engleskom jeziku.</p>`;
  }
};
