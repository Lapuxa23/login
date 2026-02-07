import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { getProductById } from '../../api/productsApi'
import '../../styles/products.css'

export default function ProductDetailsPage() {
  const { id } = useParams()
  const [product, setProduct] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadProduct() {
      try {
        setIsLoading(true)
        const data = await getProductById(id)

        if (isMounted) {
          setProduct(data)
        }
      } catch (err) {
        if (isMounted) {
          setError(err instanceof Error ? err.message : 'Неизвестная ошибка')
        }
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadProduct()

    return () => {
      isMounted = false
    }
  }, [id])

  return (
    <main className="products-page products-page--details">
      <Link className="back-link" to="/products">
        ← Назад в каталог
      </Link>

      {isLoading && <p className="status">Загрузка...</p>}
      {error && <p className="status status--error">{error}</p>}

      {product && !error && (
        <section className="product-details">
          <img src={product.thumbnail} alt={product.title} className="product-details__image" />

          <div className="product-details__content">
            <p className="product-card__category">{product.category}</p>
            <h1>{product.title}</h1>
            <p>{product.description}</p>

            <ul className="product-details__meta">
              <li>
                <span>Цена:</span> ${product.price}
              </li>
              <li>
                <span>Рейтинг:</span> {product.rating}
              </li>
              <li>
                <span>Бренд:</span> {product.brand}
              </li>
              <li>
                <span>Остаток:</span> {product.stock}
              </li>
            </ul>
          </div>
        </section>
      )}
    </main>
  )
}
