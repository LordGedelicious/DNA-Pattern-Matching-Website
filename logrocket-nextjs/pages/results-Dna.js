import DnaResults from '../components/dnas/DnaResults'

const DUMMY_RESULTS = [
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

// const DUMMY_JUDUL_KET = { keterangan: 'HIV'}


function HomePage(props) {
    return <DnaResults dnaresults = {props.dnaresults} />
}

export async function getStaticProps() {
    // fetch data from an API
    // ini belum ada fetch :v
    return {
        props:{
            dnaresults:DUMMY_RESULTS
        }
    };
}

export default HomePage
