import { Container } from '@/core/components/container/container.component';
import { ContentWrapper } from '@/core/components/ContentWrapper/content-wrapper.component';
import { SectionContainer } from '@/core/components/section/section-container.component';
import { ProductDetail } from '@/core/features/product-detail/product-detail.component';
import { getProductDetailService } from '@/core/services/getProductDetail.service';
import type { Metadata } from 'next';

interface PageDetailProps {
  params: {
    id: string;
  };
}

type GenerateMetadataProps = {
  params: { id: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata({
  params,
}: GenerateMetadataProps): Promise<Metadata> {
  const id = params.id;
  const product = await getProductDetailService(id).catch(() => null);

  return {
    title: product?.item.title,
    openGraph: {
      images: [product?.item.picture || ''],
      url: `https://www.mercadolibre.com.ar/${product?.item.title}/p/${id}`,
      siteName: 'Mercado Libre',
    },
    description: product?.item.description,
  };
}

const PageDetail = async ({ params }: PageDetailProps) => {
  const { id } = params;

  const itemDetail = await getProductDetailService(id).catch(() => null);

  if (!id || !itemDetail) {
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
        <p className='py-4'>{itemDetail.breadcrumb}</p>
        <ContentWrapper>
          <ProductDetail {...itemDetail} />
        </ContentWrapper>
      </Container>
    </SectionContainer>
  );
};

export default PageDetail;
