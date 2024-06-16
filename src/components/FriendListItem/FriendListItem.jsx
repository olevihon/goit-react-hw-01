import clsx from 'clsx';
import css from './FriendListItem.module.css';

export default function FriendListItem({ avatar, name, isOnline }) {
  const statusClsx = clsx([
    css.status,
    isOnline ? css.isActive : css.isOffline,
  ]);

  return (
    <div className={css.container}>
      <img className={css.image} src={avatar} alt="Avatar" width="48" />
      <p className={css.name}>{name}</p>
      <p className={statusClsx}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
  );
}
