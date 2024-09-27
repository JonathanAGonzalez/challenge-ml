import { Container } from '@/core/components/container/container.component';
import { SectionContainer } from '@/core/components/section/section-container.component';
import { ItemList } from '@/core/features/items/components/item-list/item-list.component';
import { getProductsService } from '@/core/services/getProducts.service';

export interface PagePropsSearchParams {
  searchParams: {
    q: string;
    param: string;
  };
}

const ItemsPage = async ({ searchParams }: PagePropsSearchParams) => {
  const { q } = searchParams;
  const { items, breadcrumb } = await getProductsService(q);

  if (items.length === 0) {
    return (
      <SectionContainer>
        <Container>
          <p>No hay publicaciones que coincidan con tu búsqueda.</p>
        </Container>
      </SectionContainer>
    );
  }

  return (
    <SectionContainer>
      <Container>
        <p className='py-2'>{breadcrumb}</p>
        <ItemList items={items || []} />
      </Container>
    </SectionContainer>
  );
};

export default ItemsPage;
