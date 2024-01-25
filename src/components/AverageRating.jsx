/* eslint-disable react/prop-types */
const AverageRating = ({averageRating}) => {
    return (
        <div className="card rating">
            <h2>Average Rating</h2>
            <p>{averageRating}</p>
        </div>
    )
}

export default AverageRating