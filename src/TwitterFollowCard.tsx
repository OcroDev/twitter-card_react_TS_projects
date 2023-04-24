import { useState } from 'react'
import { URL_IO_PROFILE, URL_SOCIAL_PROFILE } from './utils/urls'
interface Props {
  userName: string
  initialIsFollowing: boolean
  children: string
}

export const TwitterFollowCard: React.FC<Props> = ({ userName, initialIsFollowing, children }): JSX.Element => {
  const [isFollowing, setisFollowing] = useState(initialIsFollowing)

  const text: string = isFollowing ? 'Unfollow' : 'Follow'

  const buttonClassName: string = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'

  const handleClick = (): void => {
    setisFollowing(!isFollowing)
  }

  return (
  <>
      <article className='tw-followCard'>
        <header className='tw-followCard-header'>
          <img
            className='tw-followCard-avatar'
            src={`${URL_IO_PROFILE.github}${userName}`}
            alt={`${userName} user avatar image`} />
          <div className='tw-followCard-info'>
            <strong><a href={`${URL_SOCIAL_PROFILE.twitter}${userName}`}>{children}</a></strong>
            <span className='tw-followCard-infoUserName'> @{userName}</span>
          </div>
        </header>
      <aside>
        <button className={buttonClassName} onClick={handleClick}>
          <span className='tw-followCard-text'>{text}</span>
          <span className='tw-followCard-stopFollow'>Unfollow</span>
        </button>
        </aside>
      </article>
  </>)
}
