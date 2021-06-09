import {Route} from 'react-router-dom';
import MainHeader from './component/MainHeader';
import Products from './component/Products';
import Welcome from './component/Welcome';
function App() {
  return (
    <div>
      <header>
        <MainHeader/>
      </header>
      <main>
        <Route path='/welcome'><Welcome/></Route>
        <Route path='/products'><Products/></Route>
      </main>

    </div>
  );
}

export default App;
