import { useParams } from 'react-router-dom';

function ProductDetails(){
    const params = useParams();
    return(
        <section>
            <h1>Product Details</h1>
            <p>{params.productId}</p>
        </section>
    )
}

export default ProductDetails;