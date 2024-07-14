import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ProductData {
  productImg: File | null;
  productName: string;
  productDescription: string;
}

function CreateProductPage() {
  const [productData, setProductData] = useState<ProductData>({
    productImg: null,
    productName: '',
    productDescription: '',
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

      console.log('상품 등록 요청:', productData);

      navigate('/');
    } catch (error) {
      setError('상품 등록에 실패했습니다. 다시 시도해주세요.');
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <form onSubmit={handleSubmit}>
        <h2>상품 등록하기</h2>
        {error && <p className="error-message">{error}</p>}
        <div className="product-preview-container">
          <img
            src={previewImg || ''}
            alt="Product Preview"
            className="product-preview"
            onClick={() => fileInputRef.current?.click()}
          />
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileInputChange}
            style={{ display: 'none' }}
            accept=".jpeg, .jpg, .png"
            required={!productData.productImg}
          />
        </div>
        <div className="input-group">
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
            required
          />
        </div>
        <div className="input-group">
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
