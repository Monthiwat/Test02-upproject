import './NewsItem.css'

function NewsItem(props) {
    const {News, onNewsClickOpen} = props;
    return(
        <div className='News-item'>
            <img src={News.imgUrl} onClick={()=>{onNewsClickOpen(News)}}/>
            <h3>{News.title}</h3>
        </div>
    )
}

export default NewsItem;