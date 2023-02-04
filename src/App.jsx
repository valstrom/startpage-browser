import { useState } from 'react'
import './App.css'
import Clock from './components/Clock'
import ContainSquare from './components/ContainSquare'
import DailyLinks from './links/dailyLinks.json'
import MediaLinks from './links/mediaLinks.json'
import RedditLinks from './links/redditLinks.json'
import SocialLinks from './links/socialLinks.json'

function App() {
  const [text, setText] = useState('')

  const searchHandler = (e) => {
    e.preventDefault()
    if (typeof window != undefined) {
      let searchText = text.replace(' ', '+')
      window.location.href = `https://www.google.com/search?q=${searchText}`
    }
  }

  return (
    <div className="flex items-center	justify-center principal-app" style={{ height: '100vh' }}>
      <div className="flex flex-col justify-center items-center" style={{ width: '40rem' }}>
        <div>
          <Clock />
        </div>
        <div className="flex items-center">
          {/* https://www.google.com/search?q=... */}
          <form onSubmit={searchHandler}>
            <input
              placeholder="Search here..."
              className="squarexd text-center"
              required
              onChange={(e) => {
                setText(e.target.value)
              }}
            />
          </form>
        </div>
        <div className="grid gap-4 grid-cols-4 mt-5 w-full">
          <ContainSquare title="Daily" links={DailyLinks} />
          <ContainSquare title="Media" links={MediaLinks} />
          <ContainSquare title="Reddit" links={RedditLinks} />
          <ContainSquare title="Social" links={SocialLinks} />
        </div>
      </div>
    </div>
  )
}
export default App
