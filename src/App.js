import logo from './logo.svg';
import './App.css';
import ControlledForm from './component/ControlledForm';
import UnControllerForm from './component/UnControlledForm';

function App() {
  return (
    <div className="App">
      <ControlledForm />
      <UnControllerForm />
    </div>
  );
}

export default App;
