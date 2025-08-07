import CategoryList from './components/home/categoryList/CategoryList';
import Footer from './components/home/footer/Footer';
import HomeTitle from './components/home/homeTitle/HomeTitle';
import KeyPoints from './components/home/keyPoints/KeyPoints';

export default async function Home() {
  return (
    <div className='min-h-screen flex flex-col p-8 sm:px-20 sm:py-8'>
      <main className='flex-1 flex flex-col items-center justify-center gap-12'>
        <HomeTitle />
        <KeyPoints />
        <CategoryList />
      </main>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}
