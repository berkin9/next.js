
export async function getTodos(search){
    await new Promise(resolve => setTimeout(resolve, 200)); // 2 saniye geciktirir
    const todos = ["Ali", "Veli", "Hasan"]
    return todos.filter(p=> p.includes(search)) // filter searched string dynamically
}

export default async function Todos({search}){
    const todos = await getTodos(search); //func call
    return(
        <ul>
            {todos.map((val,i)=> <li key={i}>{val}</li>)}
        </ul>
    )
}