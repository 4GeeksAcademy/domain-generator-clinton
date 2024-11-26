/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronoun = ["the", "our", "his"];
let adj = ["great", "big", "amazing"];
let noun = ["jogger", "racoon", "dog", "merchant", "driver"];
let extensions = [".com", ".net", ".us", ".io", ".org", ".es"];

function generateDomains() {
  let domains = [];

  // Bucle anidado para combinar pronombres, adjetivos, sustantivos y extensiones
  for (let i = 0; i < pronoun.length; i++) {
    for (let j = 0; j < adj.length; j++) {
      for (let k = 0; k < noun.length; k++) {
        for (let e = 0; e < extensions.length; e++) {
          // Generamos el dominio básico concatenando pronoun, adj, noun y extension
          let domain = pronoun[i] + adj[j] + noun[k] + extensions[e];
          domains.push(domain); // Añadimos el dominio a la lista

          // Si la extensión es ".es", intentamos hacer un "domain hack"
          if (extensions[e] === ".es") {
            let domainHack =
              pronoun[i] +
              adj[j] +
              noun[k]
                .replace("jogger", "jogg")
                .replace("racoon", "rac")
                .toLowerCase() +
              ".es";
            domains.push(domainHack); // Añadimos el "domain hack" a la lista
          }
        }
      }
    }
  }

  return domains;
}

// Llamamos a la función y mostramos los resultados
let generatedDomains = generateDomains();

// Imprimimos los dominios generados en consola
generatedDomains.forEach(domain => {
  console.log(domain);
});
