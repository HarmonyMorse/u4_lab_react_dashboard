/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
const SentimentAnalysis = ({sentimentAnalysis}) => {
    return (
        <div>
            <h2>Sentiment Analysis</h2>
            {sentimentAnalysis.map((sent) => (
                <p>{sent}</p>
            ))}
        </div>
    )
}

export default SentimentAnalysis