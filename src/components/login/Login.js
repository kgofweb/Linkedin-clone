import { Link } from "react-router-dom"
import {
  Container, 
  Nav,
  Join,
  SignIn,
  Section,
  Hero,
  Form,
  Google
} from "./Lofin.styled"

const Login = () => {
  return (
    <Container>
      <Nav>
        <Link to="/">
          <img src="/images/login-logo.svg" alt="linkedin logo" />
        </Link>
        <div>
          <Join>Join now</Join>
          <SignIn>Sign in</SignIn>
        </div>
      </Nav>
      <Section>
        <Hero>
          <h1>Welcome to your professional community</h1>
          <img src="/images/login-hero.svg" alt="" />
        </Hero>
        <Form>
          <Google>
            <img src="/images/google.svg" alt="" />
            Sign in with Google
          </Google>
        </Form>
      </Section>
    </Container>
  )
};

export default Login;
