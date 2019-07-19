import * as React from 'react'

export default function PhotoPage(props) {
  return (<div>
    <h1>Photos in this album</h1>
    {props.photos.map(photo => {
    return (<div key={photo.title}>
      <img src={photo.url} alt = 'pic'/>
      <p>{photo.title}</p>
    </div>)})}
  </div>)
}