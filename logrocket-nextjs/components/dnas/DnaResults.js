import DnaResult from './DnaResult';
import classes from './DnaResults.module.css';

function testIfExist(input) {
  try {
      return input.dnaresults[0].tanggal;
  } catch (error) {
      console.log("keluar");
      return;
  }
}


function DnaResults(props) {
return (
  <ul className={classes.list}>
    
    <h1>{testIfExist(props)}</h1>
    {props.dnaresults.map((dnaresult) => ( 
      <DnaResult
        key={dnaresult.id}
        id={dnaresult.id}
        tanggal={dnaresult.tanggal}
        nama={dnaresult.nama}
        penyakit={dnaresult.penyakit}
        similar={dnaresult.similar}
        prediksi={dnaresult.prediksi} />
    ))}
  </ul>
);
}

export default DnaResults;
