import './scss/list-container.styles.scss';

export const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <section className='list__container'>{children}</section>;
};
