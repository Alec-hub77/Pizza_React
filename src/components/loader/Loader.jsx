import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={400}
    height={160}
    viewBox="0 0 400 160"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="3" rx="0" ry="0" width="100" height="95" /> 
    <rect x="0" y="110" rx="0" ry="0" width="100" height="9" /> 
    <rect x="0" y="131" rx="0" ry="0" width="100" height="44" />
  </ContentLoader>
)

export default MyLoader

