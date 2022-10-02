import "./Count.css"
// import TextArea from "./TextArea";
// import useState from "react";
function Count(props) {
          // const [count, setCount] = React.useState(0);
          return (
                    <div className="countContainer">
                              <div className="wordCountContainer"><p>Words: <span className="wordCountNumber">68</span></p></div>
                              <span className="verticalLine"></span>
                              <div className="letterCountContainer"><p>Letters: <span className="wordCountNumber">{props.data}</span></p></div>
                    </div>
          )
}
export default Count;