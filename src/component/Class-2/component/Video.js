import video from '../image & video/vid.mp4'
function Video() {
    return (<>
        <video width="500" height="300" controls>
            <source src={video} type="video/mp4" />
            <source src="movie.ogg" type="video/ogg" />
            Your browser does not support the video tag.
        </video>
    </>)
}
export default Video;