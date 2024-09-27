import './scss/container.styles.scss';

export const Container = ({ children }: { children: React.ReactNode }) => {
  return <div className='content__container'>{children}</div>;
};
