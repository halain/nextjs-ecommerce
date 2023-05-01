import { IProduct } from '@/interfaces';
import useSWR, { SWRConfiguration } from 'swr';

//cambiado por configuracion global en _app
// const fetcher = (...args: [key: string]) => fetch(...args).then(res => res.json());

export const useProducts = (url: string, config: SWRConfiguration = {} ) => {

  // const { data, error, isLoading } = useSWR<IProduct[]>(`/api${ url }`, fetcher, config );
  const { data, error, isLoading } = useSWR<IProduct[]>(`/api${ url }`, config );

  return {
    products: data || [],
    isLoading,
    isError: error,
  }

}