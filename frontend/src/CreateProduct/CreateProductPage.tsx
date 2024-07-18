import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './CreateProductPage.module.css';

interface ProductData {
  productImg: File | null;
  productName: string;
  productDescription: string;
  productPrice: string;
}

function CreateProductPage() {
  const [productData, setProductData] = useState<ProductData>({
    productImg: null,
    productName: '',
    productDescription: '',
    productPrice: '',
  });
  const [previewImg, setPreviewImg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (fileInputRef.current) {
      console.log('fileInputRef.current:', fileInputRef.current);
    }
  }, [fileInputRef]);

  const handleFileInputChange = () => {
    if (fileInputRef.current) {
      const file = fileInputRef.current.files?.[0];
      if (file) {
        setProductData((prevData) => ({
          ...prevData,
          productImg: file,
        }));
        setPreviewImg(URL.createObjectURL(file));
      }
    }
  };

  const handlePriceChange = (value: string) => {
    // 숫자 외의 문자를 제거하여 숫자만 남기도록 처리
    const sanitizedValue = value.replace(/[^0-9]/g, '');
    setProductData((prevData) => ({
      ...prevData,
      productPrice: sanitizedValue,
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    try {
      const formData = new FormData();
      if (productData.productImg) {
        formData.append('productImg', productData.productImg);
      }
      formData.append('productName', productData.productName);
      formData.append('productDescription', productData.productDescription);
      formData.append('productPrice', productData.productPrice);

      console.log('상품 등록 요청:', productData);
      //axios.post()
      //alert
      navigate('/');
    } catch (error) {
      setError('상품 등록에 실패했습니다. 다시 시도해주세요.');
    }

    setLoading(false);
  };

  return (
    <div className={styles["auth-container"]}>
      <form onSubmit={handleSubmit}>
        <h2>상품 등록하기</h2>
        {error && <p className={styles["error-message"]}>{error}</p>}
        <div className={styles["product-preview-container"]}>
          <img
            src={previewImg || process.env.PUBLIC_URL + '/logo192.png'}
            alt="Product Preview"
            className={styles["product-preview"]}
            onClick={() => fileInputRef.current?.click()}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            className={styles['file-input']}
            accept=".jpeg, .jpg, .png"
            required={!productData.productImg}
            style={{ display: 'none' }}
          />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="productName">제품명</label>
          <input
            type="text"
            id="productName"
            value={productData.productName}
            onChange={(e) =>
              setProductData((prevData) => ({
                ...prevData,
                productName: e.target.value,
              }))
            }
            placeholder='제품명'
            required
          />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="productPrice">가격</label>
          <input
            type="text"
            id="productPrice"
            value={productData.productPrice}
            onChange={(e) => handlePriceChange(e.target.value)}
            placeholder="가격/원"
            required
          />
        </div>
        <div className={styles["input-group"]}>
          <label htmlFor="productDescription">상세 설명</label>
          <textarea
            id="productDescription"
            value={productData.productDescription}
            onChange={(e) =>
              setProductData((prevData) => ({
                ...prevData,
                productDescription: e.target.value,
              }))
            }
            placeholder='상세 설명'
            required
          ></textarea>
        </div>
        <button type="submit" disabled={loading}>
          {loading ? '등록 중...' : '등록하기'}
        </button>
      </form>
    </div>
  );
}

export default CreateProductPage;
