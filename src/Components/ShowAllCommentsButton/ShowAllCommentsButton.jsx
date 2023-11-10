import '../Button/Button.scss'

const ShowAllCommentsButton = ({ text, onClick }) => {
    return <button className='button' id='ShowAllCommentsButton' onClick={onClick}>{text}</button>;
};
export default ShowAllCommentsButton;
