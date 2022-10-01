import "./Container.css"
import Menu from "../src/components/Menu";
import TextArea from "./components/TextArea";
import Count from "./components/Count";
function Container() {
          return (
                    <main className="container">
                              <Menu />
                              <TextArea />
                              <Count />
                    </main>
          )
}

export default Container;