import { Footer } from './components/Footer'
import './styles/App.css'
import { TwitterFollowCard } from './TwitterFollowCard'
import { type user } from './type'

const users: user[] = [
  {
    userName: 'OcroDev',
    name: 'Rohermy Ochoa',
    isFollowing: true
  },
  {
    userName: 'MoureDev',
    name: 'Brais Moure',
    isFollowing: false
  },
  {
    userName: 'chicacode',
    name: 'Geri Hernández',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguelangel Durán',
    isFollowing: false
  }
]

export const App = (): JSX.Element => {
  return (
  <>
    <section className='App'>
      <h1 style={{ color: 'white' }}>Who to follow</h1>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
        }
          <a className='show-more' href="">
        <div >
            Show more...
        </div>
          </a>
    </section>
      <Footer />
  </>
  )
}
