import React from 'react'
import {Helmet} from "react-helmet"

const Head = () => (
  <Helmet>
    <meta charSet="utf-8"/>
    <meta name="viewport" content="width=device-width, initial-scale=1"/>
	<link rel="shortcut icon" href="/static/media/favicon.png" type="image/x-icon" />
	<link rel="apple-touch-icon-precomposed" sizes="152x152" href="/static/media/apple-touch-icon.png"/>
	<link rel="apple-touch-icon-precomposed" sizes="120x120" href="/static/media/apple-touch-icon.png"/>
	<link rel="apple-touch-icon-precomposed" sizes="76x76" href="/static/media/apple-touch-icon.png"/>
	<link rel="apple-touch-icon-precomposed" href="/static/media/apple-touch-icon.png"/>
	<link rel="stylesheet" type="text/css" href="/bundle/pancake.min.css"/>
    <script async src="//www.google-analytics.com/analytics.js"></script>
    <script async src="bundle/autotrack.custom.js"></script>
  </Helmet>
)

export default Head
