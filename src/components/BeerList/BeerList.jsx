import { useEffect, useState } from "react";
import BeerItem from "../BeerItem/BeerItem";

const BeerList = () => {

  const [allBeer, setAllBeer] = useState([])

  useEffect(() => {
      fetch("https://ih-beers-api2.herokuapp.com/beers")
      .then(res => res.json())
      .then(data => setAllBeer(data))
  }, [])

  return ( 
    <section>
      {allBeer.map((beer) =>
      <BeerItem
      key={beer._id}
      id={beer._id}
      image={beer.image_url}
      name={beer.name}
      tagline={beer.tagline}/>)}
    </section>
  );
}

export default BeerList;