'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

import { SearchIcon } from '@/core/icons/search-icon.component';
import { GET_ITEMS_ROUTE } from '@/core/routes';

export const HeaderMainForm = () => {
  const router = useRouter();
  const [value, setValue] = useState('');
  const [isEmpty, setIsEmpty] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setValue(e.target.value);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isSearchInputEmpty = value.length === 0 || value.trim().length === 0;

    if (isSearchInputEmpty) {
      setIsEmpty(isSearchInputEmpty);
      return;
    }
    setValue('');
    router.push(GET_ITEMS_ROUTE(value));
  };

  return (
    <div className='search-bar'>
      <form action='/buscar' method='get' role='search' onSubmit={handleSubmit}>
        <span>
          <input
            type='search'
            name='q'
            placeholder='Nunca dejes de buscar'
            onChange={handleChange}
            value={value}
          />
          <button type='submit'>
            <SearchIcon />
          </button>
        </span>
      </form>

      {isEmpty && (
        <small className='status-error' aria-live='polite'>
          Por favor, ingresa tu búsqueda.
        </small>
      )}
    </div>
  );
};
