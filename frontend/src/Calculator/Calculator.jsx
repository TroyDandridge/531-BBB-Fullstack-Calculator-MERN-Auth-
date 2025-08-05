import "./Calculator.css"

function Calculator(){

    return(
        // Container for body
        <div className="calculator-container">

            {/* Top container user input */}
            <div className="input-container">
                <h1 className="h1-input">Enter Maxes</h1>
                <div className="input-row">
                    <label htmlFor="deadlift">Deadlift</label>
                    <input id="deadlift" type="number" placeholder="0" min="0" step={5}></input> <br></br>
                </div>
                <div className="input-row">
                    <label htmlFor="press">Shoulder Press</label>
                    <input id="press" type="number" placeholder="0" min="0" step={5}></input> <br></br>
                </div>
                <div className="input-row">
                    <label htmlFor="squat">Squat</label>
                    <input id="squat" type="number" placeholder="0" min="0" step={5}></input> <br></br>
                </div>
                <div className="input-row">
                    <label htmlFor="bench">Bench Press</label>
                    <input id="bench" type="number" placeholder="0" min="0" step={5}></input> <br></br>
                </div>
                <button className="input-button">Calculate</button> <br></br>
                <button className="input-button">Reset</button>
            </div>

            {/* Table for workout plan */}
            <table className="table">
                <caption>Workout Program</caption>
                <thead className="header">
                    <tr>
                        <th>Compound</th>
                        <th>Week 1</th>
                        <th>Week 2</th>
                        <th>Week 3</th>
                        <th>Week 4</th>
                        <th>Max</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th rowSpan="3">Deadlift</th>
                        <td>5 x </td>
                        <td>3 x </td>
                        <td>5 x </td>
                        <td>5 x </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5 x </td>
                        <td>3 x </td>
                        <td>3 x </td>
                        <td>5 x </td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>5+ x </td>
                        <td>3+ x </td>
                        <td>1+ x </td>
                        <td>5 x </td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>5 x 10 @ %</th>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Accessories</th>
                        <td><input type="text" placeholder="exercise"></input></td>
                        <td><input type="text" placeholder="exercise"></input></td>
                        <td><input type="text" placeholder="exercise"></input></td>
                        <td><input type="text" placeholder="exercise"></input></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Sets+Reps</th>
                        <td><input type="number" min="0" placeholder="-"></input></td>
                        <td><input type="number" min="0" placeholder="-"></input></td>
                        <td><input type="number" min="0" placeholder="-"></input></td>
                        <td><input type="number" min="0" placeholder="-"></input></td>
                        <td></td>
                    </tr>
                    <tr>
                        <th>Weight</th>
                        <td><input type="number" min="0" placeholder="0"></input></td>
                        <td><input type="number" min="0" placeholder="0"></input></td>
                        <td><input type="number" min="0" placeholder="0"></input></td>
                        <td><input type="number" min="0" placeholder="0"></input></td>
                        <td></td>
                    </tr>

                </tbody>
                

            </table>
            
        </div>
    )

}

export default Calculator