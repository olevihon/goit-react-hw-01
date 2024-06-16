import css from './TransactionHistory.module.css';
import clsx from 'clsx';

export default function TransactionHistory({ items }) {
  const classesTdFirst = clsx([css.td, css.bigFirstLetter]);

  return (
    <table className={css.table}>
      <thead className={css.thead}>
        <tr className={css.tr}>
          <th className={css.th}>Type</th>
          <th className={css.th}>Amount</th>
          <th className={css.th}>Currency</th>
        </tr>
      </thead>

      <tbody className={css.tbody}>
        {items.map(item => (
          <tr key={item.id} className={css.tr}>
            <td className={classesTdFirst}>{item.type}</td>
            <td className={css.td}>{item.amount}</td>
            <td className={css.td}>{item.currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
