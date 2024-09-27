import Image from 'next/image';

import { ProductDetailData } from '@/core/interfaces/items.interface';
import { formatPriceUtil } from '@/core/utils/format-price.util';
import './scss/product-detail.styles.scss';
import { Button } from '@/core/components/button/button.component';
import { ProductDescription } from '@/core/components/product-description/product-description.component';

export const ProductDetail = ({
  item,
}: {
  item: ProductDetailData['item'];
}) => {
  const quantitySold =
    item.sold_quantity && ` - ${item.sold_quantity} vendidos`;
  const productCondition = item.condition === 'new' ? 'Nuevo' : 'Usado';

  return (
    <article
      className='product-detail__container'
      role='main'
      aria-labelledby={item.title}
    >
      <div className='product-detail--wrapper'>
        <div className='product-detail__image--wrapper'>
          <Image
            src={item.picture}
            alt={item.title}
            width={600}
            height={600}
            aria-describedby={item.description}
          />
        </div>

        <div className='product-detail__information--wrapper'>
          <p className='product-detail__information--condition'>
            {productCondition} {quantitySold}
          </p>
          <h2>{item.title}</h2>
          <h3>$ {formatPriceUtil(item.price.amount)}</h3>
          <Button
            variant='primary'
            ariaLabel={`Comprar ${item.title} por $${item.price.amount}`}
          >
            Comprar
          </Button>
        </div>
      </div>

      <section className='product-detail__information--description'>
        <h3 aria-labelledby='description-heading'>Descripción del producto</h3>
        <ProductDescription description={item.description} />
      </section>
    </article>
  );
};
