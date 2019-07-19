import request from 'superagent'
export const SET_PHOTOS = 'SET_PHOTOS'

export function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    payload: photos
  }
}

export function getPhotosByAlbum(albumId){
  return function (dispatch){
    request(`https://jsonplaceholder.typicode.com/photos?${albumId}=:${albumId}`)
    .then(response => {
      console.log('response.body',response.body)
      dispatch(setPhotos(response.body))
    })

  }
}