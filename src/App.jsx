import Header from './Header';
import {Route,Routes} from 'react-router-dom'
import Home from './Home';
import Cart from './Cart';

function App() {

  return (
   <>
   
<Header></Header>

<Routes>
<Route path='/home' element={<Home></Home>}/>
<Route path="/cart" element={<Cart/>} />

</Routes>

   </>
  )
}

export default App