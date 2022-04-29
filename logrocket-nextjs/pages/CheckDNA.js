import DnaResults from '../components/dnas/DnaResults'


function CheckDNA(props) {
    return <DnaResults dnaresults = { props.dnaresults }
    />
}

// This gets called on every request
export async function getServerSideProps() {
    // Fetch data from external API
    const res = await fetch('http://localhost:3000/CheckDNA')
    const data = await res.json()

    return {
        props: {
            dnaresults: data
        }
    };
}

export default CheckDNA