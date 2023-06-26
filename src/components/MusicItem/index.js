import {AiOutlineDelete} from 'react-icons/ai'

import {
  MusicContainer,
  MainContainer,
  ImageUrl,
  Heading,
  Genre,
  DeleteContainer,
  Duration,
  DeleteButton,
} from './styledComponents'

const MusicItem = props => {
  const {MusicImageDetails, onClickDeleteTrack} = props
  const {imageUrl, id, name, genre, duration} = MusicImageDetails

  const onClickButton = () => {
    onClickDeleteTrack(id)
  }

  return (
    <MusicContainer>
      <MainContainer>
        <ImageUrl src={imageUrl} alt="track" />
        <Heading>{name}</Heading>
        <Genre>{genre}</Genre>
      </MainContainer>

      <DeleteContainer>
        <Duration>{duration}</Duration>
        <DeleteButton
          type="button"
          onClick={onClickButton}
          data-testid="delete"
        >
          <AiOutlineDelete size={25} />
        </DeleteButton>
      </DeleteContainer>
    </MusicContainer>
  )
}
export default MusicItem
