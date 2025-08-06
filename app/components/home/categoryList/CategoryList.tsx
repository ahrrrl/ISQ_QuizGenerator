import Button from '@/components/button/Button';
import { CATEGORY_LIST } from '@/constants';
import Link from 'next/link';

interface CategoryList {
  title: string;
  link: string;
}

const CategoryList = () => {
  return (
    <ul className='flex justify-center gap-[32px] flex-wrap'>
      {CATEGORY_LIST.map((item) => (
        <li key={item.title}>
          <Link href={item.link}>
            <Button variant='progress' size='lg'>
              {item.title}
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default CategoryList;
