import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Home from './pages/Home.js'
import CustomersList from './pages/Customers/List.js'
import TemplateDefault from './templates/Default.js'
import TemplatePage from './templates/Page.js'
import CustomersRegister from './pages/Customers/Register.js'
import CustomersEdit from './pages/Customers/Edit.js'

const App = () => {
  return (
    
    <Router>
      <TemplateDefault>
        <Routes>

          <Route 
            path='/' 
            element={
              <TemplatePage 
                title='Pagina Inicial'
                Component={Home}
              />
            } 
          />

          <Route 
            path='/customers' 
            element={
              <TemplatePage 
                title='Clientes' 
                Component={CustomersList} 
              />
            }
          />

          <Route 
            path='/customers/add' 
            element={
              <TemplatePage 
                title='Cadastro de Clientes' 
                Component={CustomersRegister} 
              />
            }
          />

          <Route 
            path='/customers/edit/:id' 
            element={
              <TemplatePage 
                title='Editar Cliente' 
                Component={CustomersEdit} 
              />
            }
          />

        </Routes>
      </TemplateDefault>
    </Router>
    
  );
}

export default App;
