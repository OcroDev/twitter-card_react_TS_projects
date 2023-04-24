import './App.css'
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
    userName: 'baumannzone',
    name: 'Geri Hernández',
    isFollowing: false
  },
  {
    userName: 'midudev',
    name: 'Miguel Ángel Durán',
    isFollowing: false
  }
]

export const App = (): JSX.Element => {
  return (
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
    </section>
  )
}
