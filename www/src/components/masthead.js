/** @jsx jsx */
import { jsx } from "theme-ui"
import { MdArrowForward as ArrowForwardIcon } from "react-icons/md"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"

import Button from "./button"

const MastheadContent = () => (
  <div
    className="masthead-content"
    sx={{
      margin: `0 auto`,
      px: 8,
      py: [9, null, null, 12],
      mb: [null, null, null, 6],
      textAlign: `center`,
    }}
  >
    <h1
      sx={{
        fontSize: `calc(28px + 0.5vh + 1.5vw)`,
        letterSpacing: `tight`,
        lineHeight: `solid`,
        maxWidth: `15em`,
        mb: 6,
        mt: 0,
        mx: `auto`,
      }}
    >
      Fast in every way that&nbsp;matters
    </h1>
    <p
      sx={{
        color: `text`,
        fontFamily: `heading`,
        fontSize: [4, 5],
        lineHeight: `dense`,
        maxWidth: `45rem`,
        mb: 10,
        mt: 0,
        mx: `auto`,
      }}
    >
      Gatsby is a free and open source framework based on React that helps
      developers build blazing fast <strong>websites</strong> and
      {` `}
      <strong>apps</strong>
    </p>
    <Button
      variant="large"
      to="/docs/"
      tracking="MasterHead -> Get Started"
      icon={<ArrowForwardIcon />}
      sx={{
        mb: 5,
      }}
    >
      Get Started
    </Button>
    <p
      sx={{
        color: `text`,
        fontFamily: `heading`,
        fontSize: [3, 3],
        lineHeight: `dense`,
        maxWidth: `30rem`,
        mx: `auto`,
      }}
    >
      Already using Gatsby? Preview, build, and deploy faster with{` `}
      <a
        href="https://www.gatsbyjs.com"
        onClick={() =>
          trackCustomEvent({
            category: `home-masthead`,
            action: `click`,
            label: `Gatsby Cloud`,
          })
        }
      >
        Gatsby Cloud
      </a>
      .
    </p>
  </div>
)

const Masthead = () => <MastheadContent />

export default Masthead
