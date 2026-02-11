import { Link } from 'react-router-dom'

export default function ProductCard({ product }) {
  return (
    <article className="product-card">
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
          <span className="product-card__price">${product.price}</span>
          <Link className="product-card__button" to={`/products/${product.id}`}>
            Подробнее
          </Link>
        </div>
      </div>
    </article>
  )
}
