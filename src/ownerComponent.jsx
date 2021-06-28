

function OwnerComponent() {

    return (
        <div className='form-pet-container'>
            <form>
                <label for="lname">Last name: </label>
                <input type="text" id="fsurname" name="fsurname" /><br />
                <label for="fname">Name: </label>
                <input type="text" id="name" name="name" /><br />
                <label for="adress">Adress: </label>
                <input type="text" id="adress" name="adress" /><br />
                <br/>
                <div className='button-container'>
                <input type="submit" value="Submit" className='submit-buton-pet' />
                </div>
            </form>
        </div>
    );
}

export default OwnerComponent;
