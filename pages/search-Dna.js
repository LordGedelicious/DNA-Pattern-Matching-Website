import DnaSearchForm from '../components/dnas/DnaSearchForm';
import DnaResults from '../components/dnas/DnaResults'


var DUMMY_RESULTS = [
    {
        id: '1',
        tanggal: '25 April 2022',
        nama: "rizky",
        penyakit: 'HIV',
        similar: "75",
        prediksi: 'FALSE'
    },
    {
        id: '2',
        tanggal: '25 April 2022',
        nama: "gede",
        penyakit: 'HIV',
        similar: "60",
        prediksi: 'FALSE'
    },
    {
        id: '3',
        tanggal: '25 April 2022',
        nama: "angel",
        penyakit: 'HIV',
        similar: "60",
        prediksi: 'FALSE'
    }
];

function DnaSearchPage() {
    function addDnaHandler( enteredDnaData) {

        console.log(enteredDnaData);
    }

    return (
        <><DnaSearchForm onAddDna={addDnaHandler} />
        <DnaResults dnaresults={DUMMY_RESULTS} /></>)
}

export default DnaSearchPage;