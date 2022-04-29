import DnaResult from './DnaResult';
import classes from './DnaResults.module.css';

function DnaResults(props) {
  return (
    <ul className={classes.list}>
      <h1>25 April 2022</h1>
      {props.dnaresults.map((dnaresult) => ( 
        <DnaResult
          key={dnaresult.id}
          id={dnaresult.id}
          tanggal={dnaresult.tanggal}
          nama={dnaresult.nama}
          penyakit={dnaresult.penyakit}
          similar = {dnaresult.similar}
          prediksi={dnaresult.prediksi}
        />
      ))}
    </ul>
  );
}

export default DnaResults;
