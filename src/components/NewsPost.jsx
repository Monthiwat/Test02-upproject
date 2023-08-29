import './NewsPost.css'
function NewsPost(props) {
  const {N, onBgClick} = props;
    return(
    <div className='news-post'>
        <div className='news-post-bg' onClick={onBgClick}/>
          <div className='news-post-content'>
            <img src={N.imgUrl}/>
            <h4>{N.title}</h4>
          </div>
      </div>
      )
}

export default NewsPost;

