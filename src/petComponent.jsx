import './petComponent.css';

function PetComponent() {

    return (
        <div className='form-pet-container'>
            <form>
                <label for="lname">Last name: </label>
                <input type="text" id="fsurname" name="fsurname" /><br />
                <label for="fname">Pet name: </label>
                <input type="text" id="pname" name="pname" /><br />
                <label for="species">Species: </label>
                <select id="species" name="species">
                    <option value="dog">Dog</option>
                    <option value="cat">Cat</option>
                    <option value="hamster">Hamster</option>
                    <option value="guinea_pig">Guinea Pig</option>
                    <option value="rat">Rat</option>
                    <option value="parrot">Parrot</option>
                </select><br />
                <label for="breed">Breed: </label>
                <input type="text" id="breed" name="breed" /><br />
                <input type="radio" id="female" name="fav_language" value="female" />
                <label for="female">female</label>
                <input type="radio" id="male" name="fav_language" value="male" />
                <label for="male">male</label><br />
                <label for="dob">DOB: </label>
                <input type="date"></input><br />
                <label>Years: </label><input name="numberOfGuests" type="number" // value={} // onChange={} 
                /> <br />
                <label>Spayed/castrated: </label>
                <input name="isGoing" type="checkbox" // checked={} // onChange={} 
                />
                <br/>
                <div className='button-container'>
                <input type="submit" value="Submit" className='submit-buton-pet' />
                </div>
            </form>
        </div>
    );
}

export default PetComponent;
