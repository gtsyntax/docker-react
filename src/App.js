import Card from './Card'
import './App.css'
import { robot } from './robot'

const App = () => {
    return (
        <div className="container">
            <h1 className="title">Random Robots</h1>

            <div className="card-list">
                <Card id={robot[0].id} name={robot[0].name}/>
                <Card id={robot[1].id} name={robot[1].name}/>
                <Card id={robot[2].id} name={robot[2].name}/>
                <Card id={robot[3].id} name={robot[3].name}/>
                <Card id={robot[4].id} name={robot[4].name}/>
                <Card id={robot[5].id} name={robot[5].name}/>
            </div>
        </div>
    )
}

export default App;