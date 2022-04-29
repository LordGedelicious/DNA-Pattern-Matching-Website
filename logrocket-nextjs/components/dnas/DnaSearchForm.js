import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './DnaSearchForm.module.css';


function NewSearchForm(props) {
  const search = useRef();
  
  return (
    <Card>
      <form className={classes.form} action="/Search" method="POST" encType='multipart/form-data'>
        <div className={classes.control}>
          <label htmlFor='search'>Search</label>
          <input type='text' name='search' required id='search' ref={search} />
        </div>
        <div className={classes.actions}>
          <button type='submit'>Add Input Sequence</button>
        </div>
      </form>
    </Card>
  );
}

export default NewSearchForm;
