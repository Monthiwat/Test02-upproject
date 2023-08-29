import AppHeader from './components/AppHeader';
import NewsItem from './components/NewsItem';
import NewsPost from './components/NewsPost';
import './App.css';
import { useState } from 'react';
import NewsAll from './Data/NewsAll';
import AppSearch from './components/AppSearch';

function App() {

  const [selectedNews, setSelectedNews] = useState(null);
  const [searchText, setSearchText] = useState('');

  const NewsElements = NewsAll.filter((news)=>{
    return news.title.includes(searchText);
  })
  .map((News, key)=>{
    return(<NewsItem key={key} News={News} onNewsClickOpen={onNewsClickOpen}/>);
  });

  
  function onNewsClickOpen(TheNews){
      setSelectedNews(TheNews);
    }

  function onNewsClickClose(){
      setSelectedNews(null);
    }

  let newsPost = null;
  if(!!selectedNews) {
    newsPost = <NewsPost N={selectedNews} onBgClick={onNewsClickClose}/>
  }

  return (
    <div className="App">
      <AppHeader/>
      <section className='app-section'>
        <div className='app-contrainer'>
            <AppSearch value={searchText} onChange={setSearchText}/>
            <div className='app-grid'>
              {NewsElements}
            </div>
        </div>
      </section>
      {newsPost}
    </div>
  );
}

export default App;
