import { Link } from 'react-router-dom';

function Products(){
    return(
        <div>
            <h1>The Products Page</h1>

            <ul>
                <li><Link to='products/p1'>a Book</Link> </li>
                <li><Link to='products/p2'>a carpet</Link></li>
                <li><Link to='products/p3'> online course</Link></li>
            </ul>
        </div>
    )
}

export default Products;