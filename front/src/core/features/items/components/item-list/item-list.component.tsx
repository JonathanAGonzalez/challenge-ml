import { Container } from '@/core/components/container/container.component';
import { ItemCard } from '../item-card/item-card.component';

import { Product } from '@/core/interfaces/items.interface';
import './scss/item-list.styles.scss';

export const ItemList = ({ items }: { items: Product[] }) => {
  return (
    <Container>
      <section className='item-list__container'>
        {items.map((item) => (
          <ItemCard {...item} key={item.id} />
        ))}
      </section>
    </Container>
  );
};
