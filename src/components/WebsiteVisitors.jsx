/* eslint-disable react/prop-types */
const WebsiteVisitors = ({websiteVisitors}) => {
    return (
        <div className="card visitors">
            <h2>Website Visitors</h2>
            <p>{websiteVisitors}</p>
            <div className="visitorsContent"></div>
        </div>
    )
}

export default WebsiteVisitors