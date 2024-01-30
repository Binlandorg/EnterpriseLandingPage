import Hero from 'components/Hero/Hero'
import Clients from 'components/ClientsSection/ClientsSection'
import Services from 'pages/Services/Services'
import Container from 'ui/Container/Container'

const Home = () => {
  return (
    <div>
      <Container size="lg">
        <Hero />
        <section id="portafolio" style={{ height: '100vh' }}>
          <h3>Portafolio</h3>
          Portafolio / clients / parterns
        </section>
        <Clients />
        <section>Our stack/ nuestras tecnologias?</section>
        <Services />
      </Container>
    </div>
  )
}

export default Home
