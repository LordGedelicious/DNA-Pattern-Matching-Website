import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewDnaForm.module.css';


function NewDnaForm(props) {
  const penyakitInputRef = useRef();
  const dnasequenceInputRef = useRef();
  
  return (
    <Card>
      <form action="/addnewdna" className={classes.form} method='POST' encType='multipart/form-data'>
        <div className={classes.control}>
          <label htmlFor='penyakit'>Nama Penyakit</label>
          <input type='text' name='diseaseName' required id='penyakit' ref={penyakitInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='dnasequence'>Sequence DNA</label>
          <input type='file' name='diseaseCode' required id='sequence' ref={dnasequenceInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Input Sequence</button>
        </div>
      </form>
    </Card>
  );
}

export default NewDnaForm;
