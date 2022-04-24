import classes from './MainNavigation.module.css';
import Link from 'next/link'
function MainNavigation() {

  return (
    <header className={classes.header}>
      <div className={classes.logo}>Match DNA bukan Tinder Matching</div>
      <nav>
        <ul>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/new-Dna'>Add New DNA Sequence</Link>
          </li>
          <li>
            <Link href='/'>Fun Facts</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
