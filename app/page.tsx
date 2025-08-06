import CategoryList from './components/home/categoryList/CategoryList';
import Footer from './components/home/footer/Footer';
import HomeTitle from './components/home/homeTitle/HomeTitle';

export default async function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <main className='flex-1 flex flex-col items-center justify-center gap-12 p-8 pb-20 sm:p-20'>
        <HomeTitle />
        <section className='items-center'>
          <CategoryList />
        </section>
      </main>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}
