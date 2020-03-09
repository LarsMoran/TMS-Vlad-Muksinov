import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {getVideo, loadVideos, NEXT_PAGE} from '../Redux/Actions'
import styled from 'styled-components'
import { VideoBox } from './VideoBox'

const Container = styled.div`

`

const VideoContainer = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  max-width: 1600px;
  margin-left: auto;
  margin-right: auto;
`

const ButtonContainer = styled.div`
position: absolute;
display: flex;
flex-flow: row-nowrap;
`


const StyledForm = styled.form`
display: flex;
justify-content: center
`
const Input = styled.input`
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
border-width: 2px;
border-color: red;
width: 500px;
height: 44px;
font-size: 25px;
font-family: lobster
`

const LoadButton = styled.button`
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
border: none;
background-color: red;
color: white;
width: 180px;
height: 50px;

`

const SwipeButtonNext = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  right: 0;
  margin: auto;
`
const SwipeButtonPrevious = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  color: #fff;
  text-align: center;
  opacity: 0.5;
  height: 50px;
  background: rgba(0, 0, 0, 0.5);
  left: 0;
  margin: auto;
`
export const Form = () => {
    
    const dispatch = useDispatch()
    const videos = useSelector(state => state.videos)
    const startValue = useSelector(state => state.startValue)
    const endValue = useSelector(state => state.endValue)
    const currentPage = useSelector(state => state.currentPage)
    const translation = useSelector(state => state.translation)

    const inputSearch = (event) => {
      return dispatch({type: 'SET_INPUT_VALUE', payload: event.target.value })
    }
    const loadVideos = (event) => {
        event.preventDefault()
         dispatch(getVideo())
    }
    const nextPage = () => {
        dispatch({type: 'NEXT_PAGE', payload: videos.length === 0?'':videos.map(video=> <VideoBox video={video}></VideoBox>) })
    }

    const previousPage = () => {
        dispatch({type: 'PREVIOUS_PAGE', payload: videos.length === 0?'':videos.map(video=> <VideoBox video={video}></VideoBox>) })
    }
// const setVideo = () => {
//     if(videos.length === 0) {
//         return ''
//     } else {
//         return videos[0].items.filter((el, index) => index>startValue && index<=endValue ? el : '' )
//     }
// }
// const videosArray = setVideo()

    
    return (
        <div>
            <StyledForm>
                <Input placeholder={'Search videos...'} onChange={inputSearch}></Input>
                <LoadButton onClick={loadVideos}>Load Videos</LoadButton>
            </StyledForm>
            <VideoContainer> 
                {videos.length === 0?'':videos.map(video=> <VideoBox video={video}></VideoBox>)}
            </VideoContainer>
            <ButtonContainer >
                <SwipeButtonPrevious disabled={videos.length===0 || currentPage===1 ? true : false}  onClick={previousPage}>{'<='}</SwipeButtonPrevious>
                <SwipeButtonNext disabled={videos.length===0 ? true : false}  onClick={nextPage}>{'=>'}</SwipeButtonNext>  
            </ButtonContainer>
                               
        </div>
    )
}
