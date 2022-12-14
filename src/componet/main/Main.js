import { useState } from "react"

const Main = (props) => {
    
    const styles = {
        backgroundColor: "khaki",
        input: {
            height: "10px",
            marginLeft: "5px"
        }, 
        button: {
            backgroundColor: "tomato",
            width: "20rem",
            padding: "5px",
            display: "block"

        }
    }

    const [score, setScore] = useState("10")
    const [comment, setComment] = useState("")
    

    const handleSubmit = (e) => {
        e.preventDefault()
        if (Number(score) <= 5  && comment.length <= 10){
            alert("Please give us a feedback to improve our service")
            return
        }
        console.log("form submitted")
        setComment("")
        setScore("10")
    }
  
    return(
        <div>
            <h1>main Componet Form </h1>
            <form onSubmit={handleSubmit} style={styles}>
                <fieldset>
                    <h4>Feedback Form</h4>
                    <label htmlFor="name">
                        score: {score}
                    </label>
                    <br/>
                    <input  
                        type="range"
                        max="10"
                        min="0"
                        value={score}
                        onChange={e => setScore(e.target.value)}/>
                        <br/>
                    <label>
                        Comment:
                    </label>
                    <br/>
                    <textarea value={comment} onChange={e => setComment(e.target.value)}/>
                    <button 
                        style={styles.button}
                        type="submit">
                        Submit
                    </button>
                </fieldset>
            </form>
        </div>
    )
}

export default Main;
