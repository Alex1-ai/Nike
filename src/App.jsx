import { 
  CustomerReveiws,
  SuperQuality,
   Services, 
   Subscribe, 
   Footer, 
   SpecialOffers,
   PopularProducts,
   Hero,
  //  Nav

  
  } from './sections/index'
import Nav from './components/Nav'
const App = () => {
  return (
    <main>
      <Nav />
      <section className="xl:padding-1 wide:padding-r padding-b">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
       < SpecialOffers />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReveiws />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="bg-black padding-x padding-t pb-8">
       < Footer />
      </section>
      
    </main>
  )
}

export default App