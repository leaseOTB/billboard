import { TwitterTimelineEmbed } from 'react-twitter-embed' 



export const NewsFeed = (address) => {
  return (
    <TwitterTimelineEmbed
      sourceType='profile'
      screenName='TenantsOrganiz1'
      options={{height: 500}}/>
  )
}