import React from "react"
import ContentLoader from "react-content-loader"

const NewLoader = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={430}
    viewBox="0 0 280 430"
    backgroundColor="#c7c7c7"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="130" cy="130" r="115" /> 
    <rect x="0" y="275" rx="4" ry="4" width="280" height="20" /> 
    <rect x="0" y="406" rx="0" ry="0" width="120" height="35" /> 
    <rect x="159" y="406" rx="0" ry="0" width="120" height="35" /> 
    <rect x="0" y="302" rx="10" ry="10" width="280" height="93" />
  </ContentLoader>
)

export default NewLoader