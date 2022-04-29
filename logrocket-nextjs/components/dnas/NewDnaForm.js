import { useRef } from 'react';

import Card from '../ui/Card';
import classes from './NewDnaForm.module.css';

function NewDnaForm(props) {
  const penyakitInputRef = useRef();
  const dnasequenceInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredPenyakit = penyakitInputRef.current.value;
    const enteredSequence = dnasequenceInputRef.current.value;

    const dnaData = {
      penyakit: enteredPenyakit,
      sequence: enteredSequence,
    };

    props.onAddDna(dnaData);
  }

  return (
    <Card>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor='penyakit'>Nama Penyakit</label>
          <input type='text' required id='penyakit' ref={penyakitInputRef} />
        </div>
        <div className={classes.control}>
          <label htmlFor='dnasequence'>Sequence DNA</label>
          <input type='file' required id='sequence' ref={dnasequenceInputRef} />
        </div>
        <div className={classes.actions}>
          <button>Add Input Sequence</button>
        </div>
      </form>
    </Card>
  );
}

export default NewDnaForm;
