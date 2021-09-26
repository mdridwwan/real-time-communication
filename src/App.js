
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './component/Header/Header';
import Body from './component/Body/Body';

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Body></Body>
    </div>
  );
}

export default App;
