import { useEffect } from "react";
import {ProductTable} from '../components/ProductTable';
import {products} from "../components/Products.json";
import {upgrades} from "../components/Upgrades.json";


function useRelatedCompanies(){
    
    const mergeProducts = (products: any , price: any) => {
        return products.map((price: any) => {
          const employees = products.filter((user:any) => products.includes(products.price));
          
          return { ...products, price };
        });
      };
      
      const TableProducts= (products: any) => {
        const productsUpgrade = new Array();
        products.map((price: any) => {
          if (products.status === 'active') {
            productsUpgrade.push(products)
          }
        })
        return productsUpgrade;
      }
      return(
          
      )
}

export default useRelatedCompanies