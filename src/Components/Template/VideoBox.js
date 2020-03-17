import React from 'react'
import styled from 'styled-components'
import {useSelector} from 'react-redux'
const Container = styled.div`
position: relative;
display: flex;
flex-flow: column nowrap;
width: 320px;
height: 300px;
transition: transform 0.8s ease;
margin: 40px;
border-radius: 10%;
`

const ChannelTitle = styled.a`
text-decoration: none;
font-weight: 700;
font-size: 15px;
margin: auto;
color: rgba(0,0,0, 0.7)
`

const VideoTitle = styled.a`
text-decoration: none;
font-weight: 500;
font-size: 15px;
margin: auto;
color: black;
`
export function VideoBox({video}) {
    const swipe = useSelector(state => state.translation)
    return (
        <Container style={{transform: `translateX(${swipe}px)`}}>
            <img src={video.snippet.thumbnails.medium.url} ></img>
            <VideoTitle href={`https://www.youtube.com/watch?v=${video.id.videoId}`}>
                {`${video.snippet.title}`}
            </VideoTitle>
            <ChannelTitle href={`https://www.youtube.com/channel/${video.snippet.channelId}`}>
                {`${video.snippet.channelTitle}`}
            </ChannelTitle>
            <div>
                {/* {`${video.snippet.description}`} */}
            </div>
        </Container>
    )
}