import { useRouter } from 'next/router';

import Card from '../ui/Card';
import classes from './DnaItem.module.css';

function DnaItem() {
  // const router = useRouter();
  // function showDetailHandler() {
  //   // adding a page into a stack of pages, almost the same function as link
  //   router.push('/' + props.id);
  // }
  return (
    <ul className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h2>About Us</h2>
          <h3>Website ini merupakan tugas matakuliah IF2210</h3>
          <h3>Terdapat beberapa fitur dari website ini, yaitu</h3>
          <ul>
          <li>Input File DNA</li>
          <li>Mendeteksi Pattern Match DNA</li>
        </ul> 
        </div>
      </Card>
    </ul>
  );
}

export default DnaItem;
