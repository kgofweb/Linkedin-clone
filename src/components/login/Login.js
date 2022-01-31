import { Link } from "react-router-dom"
import {
  Container, 
  Nav,
  Join,
  SignIn
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
    </Container>
  )
};

export default Login;
