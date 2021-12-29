//Kita bisa tambahkan router disini
//Folder Layout jangan dihapus jadi bungkus route ke dalam Layout

import Layout from '../layouts/Layout'
import Home from '../pages/HomePages/Home'

function App() {
 return (
  <div className='content'>
   <Layout>
    <Home />
   </Layout>
  </div>
 )
}

export default App
