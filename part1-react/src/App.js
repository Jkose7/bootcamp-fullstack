import './App.css';
import Message from './message.js'


const App = () => {
  return (
    <div className="App">
      <Message color='lightblue' msg='Firts message whit props' />
      <Message color='gray' msg='or params maybe'/>
      <Message color='green' msg='idk'/>
    </div>
  );
}

export default App;
