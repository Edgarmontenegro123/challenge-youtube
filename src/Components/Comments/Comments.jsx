import './Comments.scss'

const Comments = ({value}) => {
    return (
        <div className='card'>
            <h3 className='card__title'>Last Comment</h3>
            <p className='card__comment'>{value}</p>
        </div>
    )
}
export default Comments