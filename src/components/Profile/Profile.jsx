import { FiAtSign } from 'react-icons/fi';
import clsx from 'clsx';
import css from './Profile.module.css';

export default function Profile({ name, tag, location, image, stats }) {
  const classesTag = clsx([css.userText, css.userTextWithIcon]);

  return (
    <div className={css.container}>
      <div className={css.userInfo}>
        <img className={css.userImage} src={image} alt="User avatar" />
        <p className={css.userName}>{name}</p>
        <p className={classesTag}>
          {/* FiAtSign just for test usage of react-icons */}
          <FiAtSign className={css.userTextIcon} size={24} />
          {tag}
        </p>
        <p className={css.userText}>{location}</p>
      </div>

      <ul className={css.statsList}>
        <li className={css.statsListItem}>
          <span className={css.statsTitle}>Followers</span>
          <span className={css.statsCount}>{stats.followers}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsTitle}>Views</span>
          <span className={css.statsCount}>{stats.views}</span>
        </li>
        <li className={css.statsListItem}>
          <span className={css.statsTitle}>Likes</span>
          <span className={css.statsCount}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
