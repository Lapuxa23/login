import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  const discountedPrice = Math.round(product.price * (1 - product.discountPercentage / 100))

  return (
    <article className="product-card">
      <span className="product-card__badge">-{Math.round(product.discountPercentage)}%</span>

      <img
        className="product-card__image"
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
      />

      <div className="product-card__content">
        <p className="product-card__category">{product.category}</p>
        <h3 className="product-card__title">{product.title}</h3>
        <p className="product-card__description">{product.description}</p>

        <div className="product-card__footer">
          <div className="product-card__prices">
            <span className="product-card__price">${discountedPrice}</span>
            <span className="product-card__price product-card__price--old">${product.price}</span>
          </div>

          <Link className="product-card__button" to={`/products/${product.id}`}>
            Детали →
          </Link>
        </div>
      </div>
    </article>
  )
}
