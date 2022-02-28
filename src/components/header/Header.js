import { 
  Container,
  Content,
  Logo,
  Nav,
  NavList,
  User,
  SignOut,
  Work,
  NavListWrap,
  Search,
  SearchIcon
} from "./Header.styled";
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <Container>
      <Content>
        <Logo>
          <Link>
            <img src="./images/home-logo.svg" alt="LinkdIn Clone" />
          </Link>
        </Logo>
        <Search>
          <div>
            <input type='text' placeholder="Search" />
          </div>
          <SearchIcon>
            <img src="/images/search-icon.svg" alt="Search" />
          </SearchIcon>
        </Search>
        <Nav>
          <NavListWrap>
            <NavList className='active'>
              <Link>
                <img src="/images/nav-home.svg" alt="" />
                <span>Home</span>
              </Link>
            </NavList>

            <NavList>
              <Link>
                <img src="/images/nav-network.svg" alt="" />
                <span>My Network</span>
              </Link>
            </NavList>

            <NavList>
              <Link>
                <img src="/images/nav-jobs.svg" alt="" />
                <span>Jobs</span>
              </Link>
            </NavList>

            <NavList>
              <Link>
                <img src="/images/nav-messaging.svg" alt="" />
                <span>Messaging</span>
              </Link>
            </NavList>

            <NavList>
              <Link>
                <img src="/images/nav-notifications.svg" alt="" />
                <span>Notifications</span>
              </Link>
            </NavList>

            <User>
              <Link>
                <img src="/images/user.svg" alt="user" />
                <span>Me</span>
                {/* <img src="/images/down-icon.svg" alt="" /> */}
              </Link>

              <SignOut>
                <Link>Sign Out</Link>
              </SignOut>
           </User>

           <Work>
              <Link>
                <img src="/images/nav-work.svg" alt="" />
                <span>
                  Work
                  <img src="/images/down-icon.svg" alt="" />
                </span>
              </Link>
            </Work>
          </NavListWrap>
        </Nav>
      </Content>
    </Container>
  )
};

export default Header;
