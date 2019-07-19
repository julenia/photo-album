import * as React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumsList(props) {
  return (<div>
    <h1>All Albums</h1>

    There are { props.albums.length } albums available.
    <ul>
    {props.albums.map(album => {
      return <Link to={`albums/:${album.id}`} key={album.id}><li key={album.id}>{album.title}</li></Link>
    })}
    </ul>
  </div>)
}