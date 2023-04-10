import React from 'react';
import { TwitterTimelineEmbed } from 'react-twitter-embed';
import "./twitter.css"

function MyTweet() {
  return (
    <div>
      <section className="twitterContainer">
        <div className="twitter-embed">
          <TwitterTimelineEmbed
            sourceType="profile"
            screenName="sportsfusionhq"
            options={{
              tweetLimit: 5, // set tweet limit to 5
              width: "100%",
            }}
            theme="dark"
          ></TwitterTimelineEmbed>
        </div>
      </section>
    </div>
  );
}

export default MyTweet;
