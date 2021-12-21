import "./App.css"
import Card from "./Card/Card";
function App() {
  const pokemons=[
    {
      name:"Venusaur",
      pic:"./assets/Venusaur.png",
      Type:[
        {
          name:"Grass",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Pok%C3%A9mon_Grass_Type_Icon.svg/1200px-Pok%C3%A9mon_Grass_Type_Icon.svg.png"
        },
        {
          name:"Poison",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Pok%C3%A9mon_Poison_Type_Icon.svg/1200px-Pok%C3%A9mon_Poison_Type_Icon.svg.png"
        }
      ]
    },
    {
      name:"Charizard",
      pic:"./assets/Charizard.png",
      Type:[
        {
          name:"Fire",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Pok%C3%A9mon_Fire_Type_Icon.svg/1024px-Pok%C3%A9mon_Fire_Type_Icon.svg.png"
        },
        {
          name:"Flying",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Pok%C3%A9mon_Flying_Type_Icon.svg/1200px-Pok%C3%A9mon_Flying_Type_Icon.svg.png"
        }
      ]
    },
    {
      name:"Blastoise",
      pic:"./assets/Blastoise.png",
      Type:[
        {
          name:"Water",
          url:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Pok%C3%A9mon_Water_Type_Icon.svg/1024px-Pok%C3%A9mon_Water_Type_Icon.svg.png"
        }
      ]
    },
    
  ]
  return (
    <div className="App">
      <div className="App" style={{position:"relative"}}>
        <img style={{position:"absolute",height:"100%",width:"100%",objectFit:"cover"}} src="https://www.zastavki.com/pictures/originals/2015/Cartoons_Gray_Pokemon_on_a_black_background_108219_.png" alt=""/>
      {
        pokemons.map((pokemon)=>(
          <Card pokemon={pokemon} />
        ))
      }
      </div>
    </div>
  );
}

export default App;
