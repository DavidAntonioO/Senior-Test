import { useEffect, useState } from "react";
import {Product, Upgrade} from '../components/ProductTable'

const useTable = (table: Array<Product>) => {
    const [myTableHead, setTableHeads] = useState<Array<string>>([]);
    const [myTableBody, setTableBody] = useState<Array<string | number>[]>([]);
    useEffect(() => {
        const template = table as Array<Product>
        const heads = ['finishes', ...template.map((product) => product.product)];
        setTableHeads(heads);
        const body: Array<string | number>[] = [...tempTable[0]['finishes'].map(f => [f.finish])];
        for (let k =0; k <tempTable.lenght; k++){
          const product = tempTable[k];
          for (let i = 0; i < body.length; i++){
            const key: string = body[i][0] as string;
            const price = product.finishes.find((finish) => finish.finish === key)?.price || 0;
            body[i].push(price);
        }

       }
       setTableBody(body);
    },[])
}