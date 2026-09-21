import List from "./list"
import Counter from "./Counter"
import ColorPicker from "./ColorPicker"
import ToDoList from "./To-DO-List"
import StopWatch from "./StopWatch"

function App() {
      
  const fruit =[  {id:1, name:"apple"},
                    {id:2, name:"banana"},
                    {id:3, name:"orange"},
                    {id:4, name:"kiwi"},
                    {id:5, name:"grapes"}
    ]

  const vegetables = [  {id:1,name:"potato"},
                        {id:2, name:"carrot"},
                        {id:3, name:"tomato"},
                        {id:4, name:"onion"},
                        {id:5, name:"cabbage"}
  ]
  return (

    
    <>
    
    <Counter/>
    <ColorPicker/>

    <StopWatch/>

        <ToDoList/>
    </>
  )
}

export default App
