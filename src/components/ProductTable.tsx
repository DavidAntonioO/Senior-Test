import { useEffect, useState } from "react";
import {products} from '../components/Products.json';
import {upgrades} from './UpgradesJson.json'

export const ProductTable = ({ table }: ProductTable) => {
    const [myTableHead, setTableHeads] = useState<Array<string>>([]);
    const [myTableBody, setTableBody] = useState<Array<string | number>[]>([]);
    const detecTypeOfObject = (table: Array<product> | Array<upgrades>): 'product' | 'upgrade' => Object.hasOwn(table[0], 'product') ? 'product ': 'upgrade';
    useEffect(() => {
        const tableType = detecTypeOfObject(table);
        if(tableType === 'product'){
            const tempTable = table as Array<produtcs>
            const heads = ['finishes', ...tempTable.map((product) => product.product)];
            setTableHeads(heads);
            const body: Array<string | number>[] = [...tempTable[0]['finishes'].map(f => [f.finish])];
            for (let i =0; i< body.length; i++){
                const key: string = body[i][0] as string;
                const price = product.finishes.find((finish: { finish: string; }) => finish.finish === key)?.price || 0;
                body[i].push(price);
            }
        }
            setTableBody(body);
    
        }
    },[])

    return <table>
        <thead>
            <tr>
                {
                    myTableHead.map((v, k) => {
                        return <th key={k}>
                            {v}
                        </th>
                    })
                }
            </tr>
        </thead>
        <tbody>
            {
                myTableBody.map((row, k) => {
                    return <tr key={k}>
                        {
                            row.map((vColumn, l) => {
                                return <td key={l}>
                                    {vColumn}
                                </td>
                            })
                        }
                    </tr>
                })
            }
        </tbody>
    </table>

export default DinamicTable;