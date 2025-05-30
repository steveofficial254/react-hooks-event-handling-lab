// Code Keypad Component Here

function Keypad() {
    function handleChange(event) {
        console.log("Entering password...")
    }
    return (
        <div>
            <input
                type="password"
                name="Password"
                placeholder="Enter Password..."
                onChange={handleChange}

            />

        </div>
    )
}

export default Keypad;