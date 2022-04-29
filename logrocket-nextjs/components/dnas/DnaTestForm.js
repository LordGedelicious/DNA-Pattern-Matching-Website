import { useRef } from 'react';

import Card from "../ui/Card";
import classes from "./DnaTestForm.module.css";

function DnaTest(){
    const inputNamaRef = useRef();
    const inputSequenceRef = useRef();
    const inputPrediksiPenyakitRef = useRef();

    function submitHandler(event){
        event.preventDefault();

        const nama = inputNamaRef.current.value;
        const sequence = inputSequenceRef.current.value;
        const prediksiPenyakit = inputPrediksiPenyakitRef.current.value;

        const dnaData = {
            nama: nama,
            sequence: sequence,
            prediksiPenyakit: prediksiPenyakit
        };

        props.onAddMeetup(dnaData);
    }

    return (
        <Card>
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='namaPengguna'>Nama Pengguna</label>
                <input type='text' required id='nama' ref={inputNamaRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='dnasequenceTest'>Sequence DNA</label>
                <input type='file' required id='sequence' ref={inputSequenceRef} />
            </div>
            <div className={classes.control}>
                <label htmlFor='prediksiPenyakit'>Prediksi Penyakit</label>
                <input type='text' required id='prediksiPenyakit' ref={inputPrediksiPenyakitRef} />
            </div>
            <div className={classes.actions}>
                <button>Submit</button>
            </div>
        </form>
        </Card>
    );
}

export default DnaTest;