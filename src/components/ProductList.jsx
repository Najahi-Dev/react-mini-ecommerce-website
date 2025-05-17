import React from 'react';
import { useEffect, useState } from 'react';
import {db} from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const ProductList = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const querySnapshot = await getDocs(collection(db, "products"));
            const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setProducts(items);
        }
        fetchProducts();
    }, []);

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 p-4'>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
                {products.map(product => (
                    <div key={product.id} className="border rounded p-2">
                        <img src={product.image} alt={product.name} />
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <p>${product.price}</p>
                        <button className="bg-blue-500 text-white px-3 py-1 mt-2 rounded">Add to Cart</button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList