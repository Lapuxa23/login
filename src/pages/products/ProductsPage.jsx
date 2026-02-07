import { useEffect, useState } from 'react'
import ProductCard from '../../components/products/ProductCard'
import { getProducts } from '../../api/productsApi'
import '../../styles/products.css'

export default function ProductsPage() {
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let isMounted = true

    async function loadProducts() {
      try {
        setIsLoading(true)
        const data = await getProducts()

        if (isMounted) {
          setProducts(data)
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

    loadProducts()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <main className="products-page">
      <header className="products-page__header">
        <h1>Каталог продуктов</h1>
        <p>Выберите товар и перейдите на страницу с детальным описанием.</p>
      </header>

      {isLoading && <p className="status">Загрузка...</p>}
      {error && <p className="status status--error">{error}</p>}

      {!isLoading && !error && (
        <section className="products-grid">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </section>
      )}
    </main>
  )
}
