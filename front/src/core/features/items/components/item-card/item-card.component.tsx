'use client';
import Image from 'next/image';

import './scss/item-card.styles.scss';
import { TruckIcon } from '@/core/icons/truck-icon.component';
import { Product } from '@/core/interfaces/items.interface';
import { formatPriceUtil } from '@/core/utils/format-price.util';
import { useRouter } from 'next/navigation';
import { GET_ITEM_DETAIL_ROUTE } from '@/core/routes';

export const ItemCard = (props: Product) => {
  const router = useRouter();
  const { free_shipping, id, picture, price, title, states } = props;
  const priceFormatted = formatPriceUtil(price.amount);

  const handleRedirect = () => router.push(GET_ITEM_DETAIL_ROUTE(id));

  return (
    <article className='item-card__container' onClick={handleRedirect}>
      <div className='item-card__wrapper--information'>
        <Image
          src={picture}
          alt={title}
          width={150}
          height={150}
          aria-label={title}
          aria-describedby='product description'
          aria-labelledby='product title'
          quality={100}
        />

        <div className='item-card__information'>
          <div className='item-card__price flex items-center'>
            <h3>${priceFormatted}</h3>
            {free_shipping && (
              <span>
                <TruckIcon />
              </span>
            )}
          </div>
          <h2 className='item-card__title'>{title}</h2>
        </div>
      </div>

      <p className='item-card__city'>{states}</p>
    </article>
  );
};
