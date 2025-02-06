import {useState} from "react"; 

const ListRender = () => {
    const [list] = useState(["Fundamentos", "Arrays", "Listas", "Hooks" ])
    
    const [users, setUsers] = useState([
        { id:1, name:"Plutão", age: 190 },
        { id:2, name:"Poseidon", age:723},
        { id:3, name:"Jupter", age:232},
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id)
        }
        )
    }
  
    return (
    <div>
        <ul>
            {list.map((item, i) => (
                <li key={i} >{item}</li>
            ))}
        </ul>
        <ul>
            {users.map ((user) => (
                <li key={user.id}>{user.name} - {user.age}

                </li> 
            ))}
        </ul>
        <button onClick={deleteRandom}>Delete Random USer</button>
    </div>
  )
}

export default ListRender