import React, { useState } from 'react'
import Layout from '../Layout'
import Planet from './Planet'
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';



function Planets() {
    const [planets, setPlanets] = useState([
        {
            "id": "1",
            "name": "Mercury",
            "picture": "http://space-facts.com/wp-content/uploads/mercury-transparent.png",
            "price": "4700000000",
            "distance": "58",
            "description": "Mercury is the closest planet to the Sun and due to its proximity it is not easily seen except during twilight. For every two orbits of the Sun, Mercury completes three rotations about its axis and up until 1965 it was thought that the same side of Mercury constantly faced the Sun. Thirteen times a century Mercury can be observed from the Earth passing across the face of the Sun in an event called a transit, the next will occur on the 9th May 2016."
        },
        {
            "id": "2",
            "name": "Venus",
            "picture": "http://space-facts.com/wp-content/uploads/venus-transparent.png",
            "price": "5666000000",
            "distance": "108",
            "description": "Venus is the second planet from the Sun and is the second brightest object in the night sky after the Moon. Named after the Roman goddess of love and beauty, Venus is the second largest terrestrial planet and is sometimes referred to as the Earth’s sister planet due the their similar size and mass. The surface of the planet is obscured by an opaque layer of clouds made up of sulphuric acid."
        },
        {
            "id": "3",
            "name": "Earth",
            "picture": "http://space-facts.com/wp-content/uploads/earth-transparent.png",
            "price": "5666000000",
            "distance": "149",
            "description": "Earth is the third planet from the Sun and is the largest of the terrestrial planets. The Earth is the only planet in our solar system not to be named after a Greek or Roman deity. The Earth was formed approximately 4.54 billion years ago and is the only known planet to support life."
        },
        {
            "id": "4",
            "name": "Mars",
            "picture": "http://space-facts.com/wp-content/uploads/mars-transparent.png",
            "price": "5666000000",
            "distance": "227",
            "description": "Mars is the fourth planet from the Sun and is the second smallest planet in the solar system. Named after the Roman god of war, Mars is also often described as the “Red Planet” due to its reddish appearance. Mars is a terrestrial planet with a thin atmosphere composed primarily of carbon dioxide."
        },
        {
            "id": "5",
            "name": "Jupiter",
            "picture": "http://space-facts.com/wp-content/uploads/jupiter-transparent.png",
            "price": "5666000000",
            "distance": "778",
            "description": "The planet Jupiter is the fifth planet out from the Sun, and is two and a half times more massive than all the other planets in the solar system combined. It is made primarily of gases and is therefore known as a “gas giant”."
        },
        {
            "id": "6",
            "name": "Saturn",
            "picture": "http://space-facts.com/wp-content/uploads/saturn-transparent.png",
            "price": "5666000000",
            "distance": "1426",
            "description": "Saturn is the sixth planet from the Sun and the most distant that can be seen with the naked eye. Saturn is the second largest planet and is best known for its fabulous ring system that was first observed in 1610 by the astronomer Galileo Galilei. Like Jupiter, Saturn is a gas giant and is composed of similar gasses including hydrogen, helium and methane."
        },
        {
            "id": "7",
            "name": "Uranus",
            "picture": "http://space-facts.com/wp-content/uploads/uranus-transparent.png",
            "price": "5666000000",
            "distance": "2870",
            "description": "Uranus is the seventh planet from the Sun. While being visible to the naked eye, it was not recognised as a planet due to its dimness and slow orbit. Uranus became the first planet discovered with the use of a telescope. Uranus is tipped over on its side with an axial tilt of 98 degrees. It is often described as “rolling around the Sun on its side.”"
        },
        {
            "id": "8",
            "name": "Neptune",
            "picture": "http://space-facts.com/wp-content/uploads/neptune-transparent.png",
            "price": "5666000000",
            "distance": "4498",
            "description": "Neptune is the eighth planet from the Sun making it the most distant in the solar system. This gas giant planet may have formed much closer to the Sun in early solar system history before migrating to its present position."
        },
        {
            "id": "9",
            "name": "Sun",
            "picture": "http://pngimg.com/uploads/sun/sun_PNG13424.png",
            "price": "5666000000",
            "distance": "0",
            "description": "The Sun (or Sol), is the star at the centre of our solar system and is responsible for the Earth’s climate and weather. The Sun is an almost perfect sphere with a difference of just 10km in diameter between the poles and the equator. The average radius of the Sun is 695,508 km (109.2 x that of the Earth) of which 20–25% is the core."
        }
    ])
    const [filter, setFilter] = useState("");

    return (
        <Layout>
            <TextField id="outlined-basic" label="Outlined" variant="outlined"
                name="filter"
                type="text"
                value={filter}
                onChange={(event) => setFilter(event.target.value)} />
            <Grid container spacing={3}>
                {planets
                    .filter((planet) => planet.name.toLowerCase().includes(filter.toLowerCase()))
                    .map(planet => (
                        <Grid item xs={4}>
                            <Planet planet={planet} key={planet.id} />
                        </Grid>
                    ))}
            </Grid>
        </Layout>
    )
}

export default Planets