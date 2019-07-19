import * as React from 'react'
import PhotoPage from './PhotoPage'
import {connect} from 'react-redux'
import {getPhotosByAlbum} from '../actions/photos'

class PhotoPageContainer extends React.Component {
  state = {}
  
  componentDidMount() {
    const albumId = this.props.match.params.id
    console.log('this.props', this.props)
    console.log(`Now fetch photos for albumId = ${albumId}`)
    this.props.getPhotosByAlbum(albumId)
    console.log(this.props.getPhotosByAlbum(albumId))
  }

  render() {
    if (!this.props.photos) return 'Loading...'
    return <PhotoPage photos={this.props.photos} />
  }
}

const mapStateToProps = (state) => ({
  photos: state.photos
})


export default connect(mapStateToProps, {getPhotosByAlbum})(PhotoPageContainer)