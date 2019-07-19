import * as React from 'react'
import AlbumsList from './AlbumsList'
import {connect} from 'react-redux'
import { helloWorld } from '../actions/test'
import {addAlbum, setAlbums, getAlbums} from '../actions/albums'

 class AlbumsListContainer extends React.Component {
  state = {}

  componentDidMount() {
    this.props.getAlbums()
  }

  render() {
    if (!this.props.albums) return 'Loading...'
    return <AlbumsList albums={this.props.albums} />
  }
}

const mapStateToProps = (state) => {
  return {
    albums: state.albums
  }
}

export default connect(mapStateToProps, { helloWorld, addAlbum, setAlbums, getAlbums })(AlbumsListContainer)