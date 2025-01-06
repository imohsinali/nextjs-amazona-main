/* eslint-disable @typescript-eslint/no-explicit-any */
import { SelectItem } from '@/components/ui/select';
import { getAllCategories } from '@/lib/actions/product.actions';
import useSWR from 'swr';

export default function Categories({ setOpen }: any) {
  const { data } = useSWR('getAllCategories', getAllCategories);
  //   useEffect(() => {
  //     return () => {
  //       setOpen(false);
  //     };
  //   }, []);
  return (
    <>
      <SelectItem value='all'>All</SelectItem>
      {data?.map((category: any) => (
        <SelectItem
          key={category}
          value={category}
          onClick={() => setOpen(false)}
        >
          {category}
        </SelectItem>
      ))}
    </>
  );
}
