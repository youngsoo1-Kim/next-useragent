import { useUserAgent } from 'next-useragent'
import React from 'react'

export default props => {
  let ua;
  if (props.uaString) {
    ua = useUserAgent(props.uaString)
  } else {
    ua = useUserAgent(window.navigator.userAgent)
  }

  return (
    <div>
      <p>useragent: { ua.source }</p>
      { ua.isMobile ? (
        <p>Mobile</p>
      ) : (
        <p>Desktop</p>
      ) }
    </div>
  )
}

export function getServerSideProps(context) {
  return {
    props: {
      uaString: context.req.headers['user-agent']
    }
  }
}
