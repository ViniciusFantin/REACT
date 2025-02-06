import {useState} from "react"; 

const ListRender = () => {
    const [list] = useState(["Fundamentos", "Arrays", "Listas", "Hooks" ])
    
    const [users, setUsers] = useState([
        { id:1, name:"Plutão", age: 190 },
        { id:2, name:"Poseidon", age:723},
        { id:3, name:"Jupter", age:232},
        { id:4, name:"Vênus", age: 190 },
        { id:5, name:"Mercúrio", age:723},
        { id:6, name:"Solaris", age:232},
        { id:7, name:"Omega", age: 190 },
        { id:8, name:"Marte", age:723},
        { id:9, name:"Zeus", age:232},
    ]);

    const deleteRandom = () =>{
        const randomNumber = Math.floor(Math.random() * 10);

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
        <button className="buttons1" onClick={deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender