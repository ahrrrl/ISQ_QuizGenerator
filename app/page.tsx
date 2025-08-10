import CategoryList from './components/home/categoryList/CategoryList';
import Footer from './components/home/footer/Footer';
import HomeTitle from './components/home/homeTitle/HomeTitle';
import KeyPoints from './components/home/keyPoints/KeyPoints';

export default async function Home() {
  return (
    <>
      <HomeTitle />
      <CategoryList />
      <KeyPoints />
    </>
  );
}
