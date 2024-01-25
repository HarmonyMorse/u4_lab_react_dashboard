/* eslint-disable react/prop-types */
const Reviews = ({reviews}) => {
    return (
        <div className="card reviews">
            <h2>Reviews</h2>
            <p>{reviews.toLocaleString()}</p>
        </div>
    )
}

export default Reviews