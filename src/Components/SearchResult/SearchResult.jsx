import './SearchResult.scss'

const SearchResult = ({value}) => {
    return(
        <div className='title'>
            <h1 className='title__title'>Video title</h1>
            <h1 className='title__subtitle'>{value}</h1>
        </div>
    )
}
export default SearchResult