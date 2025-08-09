import CategoryList from './components/home/categoryList/CategoryList';
import Footer from './components/home/footer/Footer';
import HomeTitle from './components/home/homeTitle/HomeTitle';
import KeyPoints from './components/home/keyPoints/KeyPoints';

export default async function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center p-8 sm:px-20 sm:py-8 '>
      <main className='flex-1 max-w-[1024px] flex flex-col items-center justify-around gap-12 mt-14'>
        <HomeTitle />
        <CategoryList />
        <KeyPoints />
      </main>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}
