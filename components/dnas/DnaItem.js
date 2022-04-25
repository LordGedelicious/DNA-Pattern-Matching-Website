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
          <h1>About Us</h1>
          <h3>Website ini merupakan tugas matakuliah IF2210</h3>
          <h3>Terdapat beberapa fitur dari website ini, yaitu</h3>
          <Card>
            <div className={classes.test}>
              <h3>Input File DNA</h3>
              <h3>Mendeteksi Pattern Match DNA</h3>
            </div>
          </Card>
        </div>
      </Card>
    </ul>
  );
}

export default DnaItem;
