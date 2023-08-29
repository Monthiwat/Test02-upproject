import './AppSearch.css'

function AppSearch(props) {
    const { value, onChange} = props;

    return (
        <div className='app-search'>
            <input
              className='app-search-input'
              type='text'
              placeholder='Searching'
              value={value}
              onChange={(event)=>{onChange(event.target.value)}}
            />
        </div>  
    )
    
}
export default AppSearch;