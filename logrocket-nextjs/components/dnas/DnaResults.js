import DnaResult from './DnaResult';
import classes from './DnaResults.module.css';

function DnaResults(props) {
  return (
    <ul className={classes.list}>
      <h1>Testing</h1>
      {props.dnaresults.map((dnaresult) => ( 
        <DnaResult
          key={dnaresult.id}
          id={dnaresult.id}
          tanggal={dnaresult.tanggal}
          nama={dnaresult.nama}
          penyakit={dnaresult.penyakit}
          prediksi={dnaresult.prediksi}
        />
      ))}
    </ul>
  );
}

export default DnaResults;
