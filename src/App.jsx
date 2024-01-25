import './App.css'
import Menu from './components/Menu'
import Reviews from './components/Reviews'
import AverageRating from './components/AverageRating'
import WebsiteVisitors from './components/WebsiteVisitors'
import SentimentAnalysis from './components/SentimentAnalysis'

const App = () => {

  const reviews = 1281
  const averageRating = 4.6
  const sentimentAnalysis = [960, 122, 321]
  const websiteVisitors = 821

  return (
    <div className='appContent'>
      <Menu />
      <Reviews reviews={reviews} />
      <AverageRating averageRating={averageRating} />
      <SentimentAnalysis sentimentAnalysis={sentimentAnalysis} />
      <WebsiteVisitors websiteVisitors={websiteVisitors} />
    </div>
  )
}

export default App