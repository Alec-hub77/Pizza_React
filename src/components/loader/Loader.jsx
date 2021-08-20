import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={300}
    height={400}
    viewBox="0 0 400 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="270" rx="0" ry="0" width="280" height="90" /> 
    <rect x="0" y="232" rx="0" ry="0" width="280" height="20" /> 
    <circle cx="138" cy="111" r="100" />
  </ContentLoader>
)

export default MyLoader

