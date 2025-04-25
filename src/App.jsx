import Left from "./components/Left"
import Right from "./components/Right"


function App() {


  return (
    <div className="w-full flex justify-center">
    <div className="grid grid-cols-2 gap-20 h-screen w-full md:w-[80%] items-center justify-center">
        <Left />
        <Right />
    </div>
    </div>
  )
}

export default App
