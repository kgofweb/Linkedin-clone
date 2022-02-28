import {
  AddPhotoText,
  ArtCard,
  CardBackground,
  CommunityCard,
  Container,
  Item,
  Photo,
  UserInfo,
  Widget,
} from "./LeftSide.styled"

import { Link } from 'react-router-dom'

const LeftSide = () => {
  return (
    <Container>
      <ArtCard>
        <UserInfo>
          <CardBackground />
          <Link>
            <Photo />
            <Link>Welcome, there!</Link>
          </Link>
          <Link>
            <AddPhotoText>Add a photo</AddPhotoText>
          </Link>
        </UserInfo>
        <Widget>
          <Link>
            <div>
              <span>Connections</span>
              <span>Grow your network</span>
            </div>
            <img src="/images/widget-icon.svg" alt="" />
          </Link>
        </Widget>
        <Item>
          <span>
            <img src="/images/item-icon.svg" alt="" />
            My Items
          </span>
        </Item>
      </ArtCard>

      <CommunityCard>
        <Link>
          <span>Groups</span>
        </Link>
        <Link>
          <span>
            Events
            <img src="/images/plus-icon.svg" alt="" />
          </span>
        </Link>
        <Link>
          <span>Follow Hashtags</span>
        </Link>
        <Link>
          <span>Discover more</span>
        </Link>
      </CommunityCard>
    </Container>
  )
}

export default LeftSide