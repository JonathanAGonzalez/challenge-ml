import './scss/section-container.styles.scss';

export const SectionContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <section className='section--container'>{children}</section>;
};
