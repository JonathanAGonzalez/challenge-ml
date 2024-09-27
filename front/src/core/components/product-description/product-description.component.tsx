import './scss/product-description.styles.scss';

interface ProductDescriptionProps {
  description: string;
}

export const ProductDescription: React.FC<ProductDescriptionProps> = ({
  description,
}) => {
  if (!description || description.trim() === '') {
    return <p className='product-description'>Descripción no disponible.</p>;
  }

  return <p className='product-description'>{description}</p>;
};
