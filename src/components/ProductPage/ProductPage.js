import { useNavigate, useParams } from 'react-router-dom';
import Icons from '../Icons/Icons';
import style from './ProductPage.module.css';


function ProductPage({ products }) {
    const navigate = useNavigate();
    const { productId } = useParams();
    const product = products.find(p => p.id === Number(productId));
    if (!product) {
        return <h2>Product not found</h2>;
    }

    const handleClick = () => {
        navigate('/catalog')
    }
    return (
        <div className={style['product-card']}>
            <Icons name={product.name} />
            <h2 className={style['product-name']}>{product.name}</h2>
            <p>Some more information about the product </p>
            <p >Price: ${product.price}</p>

            <button onClick={handleClick}>back</button>
        </div>
    );
}

export default ProductPage;