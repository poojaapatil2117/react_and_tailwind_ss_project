import { CategorySlider, Hero, Process, ProductList, TopCollection, TopSeller, Trust } from "../../routes"

export const Home = () => {
  return (
    <>
      <Hero/>
      <CategorySlider/>      
      <ProductList />
      <TopSeller />
      <Process />
      <Trust/>
      <TopCollection />
    </>
  )
}
