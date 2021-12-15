import Layout from "../view/layout.js";
import dohvatiRezultate from "./dohvatiRezultate.js";
import RezultatView from "../view/rezultati.js";

export default async () => {
  document.getElementById("app").innerHTML = Layout();
  document.getElementById("search").addEventListener("keyup", async () => {
    document.getElementById("spinner").classList.remove("hidden");
    document.getElementById("spinner").classList.add("show");
    let Rez = await dohvatiRezultate(event.target.value);
    document.getElementById("spinner").classList.remove("show");
    document.getElementById("spinner").classList.add("hidden");
    document.getElementById("rezultati").innerHTML = RezultatView(Rez);
  });
};
