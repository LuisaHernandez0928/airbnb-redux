import styles from "./index.module.css";
import { Title } from "../title";
import { Noche } from "../noche";

function PriceFormatter({ priceUSD, currency }) {
  const currencies = {
    COP: 3939,
    MXN: 17,
  };

  const formatValue = (num) => {
    const strNum = num.toString(); //cojo el numero entero y lo convierto en string
    const length = strNum.length - 1; // le quita un digito al tamaño de la string para obtener el ultimo indice de la cadena
    let formattedValue = [];
    let counter = 0;
    for (let i = length; i >= 0; i--) {
      // i empieza en el ultimo caracter del string y va retrocediendo
      if (counter === 3) {
        //Cuando ya a recorrido tres posiciones, agrega una coma y empieza en 1
        counter = 1;
        formattedValue.push(",");
      } else counter++; // Inserta los ultimos numeros al inicio del arreglo y si a recorrido menos de 3 numeros, sigue aumentando el contador hasta llegar a 3
      formattedValue.push(strNum.charAt(i));
    }
    let myStrFormatted = "";
    const strLenght = formattedValue.length - 1;
    for (let i = strLenght; i >= 0; i--) myStrFormatted += formattedValue[i]; //Reversa los numeros del arreglo formattedValue y los inserta al reves uno por uno en una string
    return myStrFormatted;
  };

  const valueConverted = parseInt(currencies[currency] * priceUSD); // convierte el numero en un entero sin decimales
  const valueFormatted = formatValue(valueConverted);

  return (
    <div className={styles.priceStyle}>
      <Title text={"$" + valueFormatted + " " + currency} />
      <Noche />
    </div>
  );
}

export { PriceFormatter };
