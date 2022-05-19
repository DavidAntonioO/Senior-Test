import { useEffect } from "react";
import './App.css'
import ProductTable from './components/ProductTable'
import {products} from './components/Products.json'
import {upgrades} from './components/UpgradesJson.json'

function App(){
  useEffect(() => {
    console.log(products, upgrades);
  },[])
    return(
      <main>
        <ProductTable table ={products}/>
      </main>
    )
   }

  export default App;
