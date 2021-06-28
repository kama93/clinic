
function PetComponent() {

    return (
        <div>
            <form>
                <label>
                    Is going:
                    <input name="isGoing"
                        type="checkbox"
                        // checked={}
                        // onChange={} 
                        />
                </label>
                <br />
                <label>
                    Number of guests:
                        <input name="numberOfGuests"
                        type="number"
                        // value={}
                        // onChange={} 
                        />
                </label>
            </form>
        </div>
    );
}

export default PetComponent;
