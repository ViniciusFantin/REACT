const CarDetails = ({brand, km, color, year, newCar}) => {
  return (
    <div>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>cor: {color}</li>
            <li>Ano: {year}</li>
        </ul>
        {newCar && <p>Este carro é novo</p>}
    </div>
  )
}

export default CarDetails