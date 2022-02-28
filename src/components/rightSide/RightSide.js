import {
  Container,
  Avatar,
  BannerCard,
  FeedList,
  FollowCard,
  Recommendation,
  Title
} from "./RightSide.styled"

import { Link } from 'react-router-dom'

const RightSide = () => {
  return (
    <Container>
      <FollowCard>
        <Title>
          <h2>Add to your feed</h2>
          <img src="/images/feed-icon.svg" alt="" />
        </Title>

        <FeedList>
          <li>
            <Link>
              <Avatar />
            </Link>
            <div>
              <span>#Linkedin</span>
              <button>Follow</button>
            </div>
          </li>
          <li>
            <Link>
              <Avatar />
            </Link>
            <div>
              <span>#Video</span>
              <button>Follow</button>
            </div>
          </li>
        </FeedList>

        <Recommendation>
          View all recommendations
          <img src="/images/right-icon.svg" alt="" />
        </Recommendation>
      </FollowCard>
      <BannerCard>
        <img
          src="https://static-exp1.licdn.com/scds/common/u/images/promo/ads/li_evergreen_jobs_ad_300x250_v1.jpg"
          alt=""
        />
      </BannerCard>
    </Container>
  )
}

export default RightSide