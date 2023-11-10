import './Comment.scss'
const AllComments = ({ allComments, videoViews }) => {
    return (
        <div className='allComments'>
            <h3>Views: {videoViews}</h3>
            <h3>All Comments</h3>
            <ul>
                {allComments?.map((comment, index) => (
                    <li key={index}>{comment}</li>
                ))}
            </ul>
        </div>
    );
};
export default AllComments;