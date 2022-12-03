import React from "react";

import type { HeadFC } from "gatsby";
// import { TwitterTimelineEmbed } from "react-twitter-embed";

/**
 * ? Local Imports
 */
import { Header, LinkType } from "@portfolio-components/header";
import { SEO } from "@portfolio-components/seo";

const Contact: React.FC = () => {
  return (
    <>
      <Header view={LinkType.Contact} />
      <div>Contact</div>
      {/* <TwitterTimelineEmbed
        sourceType="profile"
        screenName={"abisalde"}
        options={{ height: 400, width: window.screen.width }}
        autoHeight={false}
        borderColor="#fff"
        key={"twitter-em"}
        noFooter={true}
      /> */}
      <div>
        <form>
          <input className="" placeholder="Your name" name="name" aria-label="Your name" required type="text" />
          <input
            aria-label="Email address"
            className=""
            placeholder="Email Address"
            name="name"
            required
            type="email"
          />
          <input aria-label="Subject" className="" placeholder="Subject" name="subject" required type="text" />
          <textarea aria-label="Message" className="" placeholder="Let me know...." name="message" required />
        </form>
      </div>
    </>
  );
};

export default Contact;

export const Head: HeadFC = () => <SEO pathname={`/${LinkType.Contact}`} title="Contact Me" />;
