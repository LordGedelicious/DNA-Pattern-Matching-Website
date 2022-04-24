import NewDnaForm from '../components/dnas/NewDnaForm';


function NewDnaPage() {
    function addDnaHandler( enteredDnaData) {

        console.log(enteredDnaData);
    }

    return <NewDnaForm onAddDna = {addDnaHandler}/>
}

export default NewDnaPage;