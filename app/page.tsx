import CategoryList from './components/home/categoryList/CategoryList';
import Footer from './components/home/footer/Footer';
import HomeTitle from './components/home/homeTitle/HomeTitle';

export default async function Home() {
  return (
    <div className='min-h-screen flex flex-col p-8 sm:p-20'>
      <main className='flex-1 flex flex-col items-center justify-center gap-12'>
        <HomeTitle />
        <section>
          <CategoryList />
        </section>
      </main>
      <div className=''>
        <Footer />
      </div>
    </div>
  );
}
