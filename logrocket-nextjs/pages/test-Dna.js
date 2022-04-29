import DnaTestForm from '../components/dnas/DnaTestForm';

function DnaTestPage() {
    function addDnaHandler(enteredDnaData) {

        console.log(enteredDnaData);
    }

    return <DnaTestForm onAddDna = { addDnaHandler }
    />
}

export default DnaTestPage;