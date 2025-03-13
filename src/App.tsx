import "./index.css"
import './app.css'
import DecisionPanel from "./components/DecisionPanel"
function App() {

  return (
    <div>
      <h1 className="text-3xl font-bold">
        The Decider
      </h1>
      <div className="flex justify-center w-full mt-4">

        <DecisionPanel placeholder={"choice 1"} />
        <DecisionPanel placeholder={"choice 2"} />
      </div>
    </div>
  )
}


export default App


