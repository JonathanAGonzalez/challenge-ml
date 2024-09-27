import { LogoMain } from '../logo/logo-main.component';
import { HeaderMainForm } from './header-main-form.component';
import './scss/header.styles.scss';

export const HeaderMain = () => {
  return (
    <header>
      <div className='search-container'>
        <LogoMain />
        <HeaderMainForm />
      </div>
    </header>
  );
};
