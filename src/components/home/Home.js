import { Link } from 'react-router-dom'

import {
  Container,
  Section,
  Layout,
  Content
} from './Home.styled'
import LeftSide from '../leftSide/LeftSide'
import RightSide from '../rightSide/RightSide'
import Main from '../main/Main'

const Home = () => {
  return (
    <Container>
      <Content>
        <Section>
          <h5>
            <Link to=''>Hiring in a hurry? - </Link>
          </h5>
          <p>
            Find talented pros in record time with Upwork and keep business moving.
          </p>
        </Section>
        <Layout>
          <LeftSide />
          <Main />
          <RightSide />
        </Layout>
      </Content>
    </Container>
  )
};

export default Home;
