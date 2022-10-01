import "./Count.css"
import useState from "react";
function Count() {
          // const [count, setCount] = React.useState(0);
          return (
                    <div className="countContainer">
                              <div className="wordCountContainer"><p>Words: <span className="wordCountNumber">68</span></p></div>
                              <span className="verticalLine"></span>
                              <div className="letterCountContainer"><p>Letters: <span className="wordCountNumber">480</span></p></div>
                    </div>
          )
}
export default Count;