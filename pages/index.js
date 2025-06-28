import Head from 'next/head';
import { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import { Container, Row, Col } from 'react-bootstrap';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/products')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  return (
    <>
      <Head><title>ToGoWear - Clothing Brand</title></Head>
      <Container className="py-5">
        <h1 className="mb-4 text-center">Our Collection</h1>
        <Row>
          {products.map(product => (
            <Col key={products._id} sm={12} md={6} lg={4} className="mb-4">
              <ProductCard product={product} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
