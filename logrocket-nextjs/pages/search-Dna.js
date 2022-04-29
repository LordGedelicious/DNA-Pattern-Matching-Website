import DnaSearchForm from '../components/dnas/DnaSearchForm';


function DnaSearchPage() {
    function addDnaHandler( enteredDnaData) {

        console.log(enteredDnaData);
    }

    return <DnaSearchForm onAddDna = {addDnaHandler}/>
}

export default DnaSearchPage;