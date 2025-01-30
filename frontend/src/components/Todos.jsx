export function Todos({todos}){
    return <div>
        {
            todos.map(function(todo){
                return <div>
                    <h1>{todos.title}</h1>
                    <h2>{todos.description}</h2>
                    <button onClick={() => {
            fetch("http://localhost:3000/completed", {
                method: "PUT",
                body: JSON.stringify({
                    id:id
                }),
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(async (res) => {
                const json = await res.json();

            })
        }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
                </div>
            })
        }
    </div>
}