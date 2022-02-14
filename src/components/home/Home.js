import { Link } from 'react-router-dom'

import {
  Container,
  // Content,
  Section,
  Layout
} from './Home.styled'

const Home = () => {
  return (
    <Container>
      <Section>
        <h5>
          <Link to=''>Hiring in a hurry? - </Link>
        </h5>
        <p>
          Find talented pros in record time with Upwork and keep business moving.
        </p>
      </Section>
      <Layout>
        {/* <Leftside />
        <Main />
        <Rightside /> */}
      </Layout>
    </Container>
  )
};

export default Home;
