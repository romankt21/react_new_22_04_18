import './App.css'
import Actor from "./components/Actor";
import Users from "./components/Users";
const actors = [
{id: 1, name: 'Tom', img:'https://i.pinimg.com/originals/92/a6/2f/92a62f0221f58fe503a15fcb13f5c107.png'},
{id: 2, name: 'Jerry', img:'https://i.pinimg.com/originals/fa/f7/b6/faf7b6bd1784990bcaec6f2eed5d012b.jpg'}

]
function App() {
  return (
     <div>
         {actors.map(actor=><Actor key={actor.id} name={actor.name} img={actor.img}/>)}
         <Users/>
     </div>
  );
}

export default App;