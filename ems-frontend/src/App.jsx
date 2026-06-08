import './App.css'
import HelloWorld from './HelloWorld'
import ListOfEmployees from './components/ListEmpComponent'
import HeaderComponent from './components/Header'
import FooterComponent from './components/FooterComponent'
import EmployeeAdd from './components/EmployeeAdd'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
function App() {

  return (
    <>
      <BrowserRouter>
        <HeaderComponent/>
        <Routes>
          {/* http://localhost:3000 */}
          <Route path='/' element={<ListOfEmployees/>}></Route> 
          {/* http://localhost:3000/employees */}
          <Route path='/employees' element={<ListOfEmployees/>}></Route>
          {/* http://localhost:3000/employees/add-employee */}
          <Route path='/add-employee' element={<EmployeeAdd/>}></Route> 
          {/* http://localhost:3000/employees/edit-employee */}
          <Route path='/edit-employee/:id' element={<EmployeeAdd/>}></Route>
        </Routes>
        <FooterComponent/>
      </BrowserRouter>
    </>
  )
}

export default App
