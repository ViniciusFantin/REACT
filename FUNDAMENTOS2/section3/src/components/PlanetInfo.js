const PlanetInfo = (props) => {
  return (
    <div>
        <h1>Planets Description</h1>
        <ul>
            <li className="lista2">Nomenclature: {props.name}</li>
            <li className="lista2">Gravity: {props.N}</li>
            <li className="lista2">Atmosphere: {props.AT}</li>
            <li className="lista2">Atmosphere Elements: {props.AE}</li>
            <li className="lista2">Moons: {props.moon}</li>
            <li className="lista2">Radius: {props.r}</li>
            <img src="Xytheron.jpeg" alt="" className="img3" />
            <li className="lista2">Star: {props.star}</li>
            <img src="Syrion_Star.jpeg" alt="" className="img3"/>
            <li className="lista2">Galaxy: {props.gl}</li>
            <img src="Veydraxis.jpeg" alt="galaxy" className="img3"/>
            <li className="lista2">Soil: {props.s}</li>
            <li className="lista2">Biosphere: {props.b}</li>
            <img src="Xytheron_Landscape.jpeg" alt="solo" className="img3"/>
            <li className="lista2">Life: {props.l}</li>
            <img src="Xytheron_Creature.jpeg" alt="Citizen" className="img3"/>
        </ul>
            
    </div>
  )
}

export default PlanetInfo