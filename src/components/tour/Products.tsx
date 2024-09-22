import React from 'react'
import { IProduct } from '../../types/model/product.model'


interface ProductsProps {
    queryString: string
    products: IProduct[]
}
const Products:React.FC<ProductsProps> = ({queryString,products}) => {
  return (
    <div>
        <h4 className='text-sm my-1 text-gray-500'>Products</h4>
       {products.length>0 ? products.map((product,index)=> (<div className='hover:bg-gray-300 px-4 cursor-pointer' key={index}>{product.name?product.name:'Product name'}</div>)):<div>No result for <span className='text-xs italic'>{queryString}</span></div>}
    </div>
  )
}

export default Products