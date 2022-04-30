import Card from '../ui/Card';
import classes from './DnaItem.module.css';

function DnaResult(props) {
  return (
    <li className={classes.item}>
      <Card>
        <div className={classes.content}>
          <h3>{props.id}. {props.tanggal} - {props.nama} - {props.penyakit} - {props.similar} - {props.prediksi}</h3>
        </div>
      </Card>
    </li>
  );
}

export default DnaResult;