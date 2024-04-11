import Header from './component/Header.jsx'
import Footer from './component/Footer.jsx'
import Sidebar from './component/Sidebar.jsx'
import './App.css'
import DataStoreProvider from './store/DataStore.jsx'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <DataStoreProvider>
      <div className="container">
        <Sidebar></Sidebar>
        <div className="content">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </DataStoreProvider>
  )
}

export default App
