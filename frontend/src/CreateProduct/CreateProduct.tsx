import { Link } from 'react-router-dom';
import styles from './CreateProduct.module.css'; 

function CreateProduct() {
    return (
        <div className={styles.createProductContainer}>
            <Link to="/create/product" className={styles.createProductButton}>
                게시물 생성하기
            </Link>
        </div>
    );
}

export default CreateProduct;
