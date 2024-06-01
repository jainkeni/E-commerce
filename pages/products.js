import Layout from "@/components/Layout";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";

export default function Products(){
    const [products, setProducts] = useState([]);
    useEffect(() => {
        axios.get('/api/products').then(response =>{
            setProducts(response.data);
        });
        console.log("Product: ",products);
    }, []);
    return (
        <Layout>
            <Link className="bg-blue-900 text-white rounded-md px-2 py-2" 
            href={'/products/new'}>Add new product</Link>
            <table className="basic">
                <thead>
                    <tr>
                        <td>Product name</td>
                        <td></td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product,index) =>(
                        <tr key={index}>
                            <td>{product.title}</td>
                            <td>
                                buttons
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </Layout>
    );
}