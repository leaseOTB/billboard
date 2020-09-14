import { TwitterTimelineEmbed } from 'react-twitter-embed' 



export const NewsFeed = (address) => {
  return (
    <TwitterTimelineEmbed
      sourceType='profile'
      screenName='LeaseOTB'
      options={{height: 500}}/>
  )
}