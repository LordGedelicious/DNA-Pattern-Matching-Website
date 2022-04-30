import { useRef } from 'react';

import Card from "../ui/Card";
import classes from "./DnaTestForm.module.css";

function DnaTest(){
    const inputNamaRef = useRef();
    const inputSequenceRef = useRef();
    const inputPrediksiPenyakitRef = useRef();

    return (
        <Card>
        <form className={classes.form} action="/CheckDNA" method="POST" encType='multipart/form-data'>
            <div className={classes.control}>
                <label htmlFor='namaPengguna'>Nama Pengguna</label>
                <input name='patientName' type='text' required id='nama' ref={inputNamaRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='dnasequenceTest'>Sequence DNA</label>
                <input name='patientDNACode' type='file' required id='sequence' ref={inputSequenceRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='prediksiPenyakit'>Prediksi Penyakit</label>
                <input name='diseaseTarget' type='text' required id='prediksiPenyakit' ref={inputPrediksiPenyakitRef} />
            </div>
            <div className={classes.actions}>
                <button type='submit'>Submit</button>
            </div>
        </form>
        </Card>
    );
}

export default DnaTest;