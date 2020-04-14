import React from 'react'
import { render } from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
/*import MainPage from './FakeReddit/main-page'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
*/

var MyComponent = React.createClass({
   render() {
      return <div>
                <h1>Hello World!</h1>
                <p>This is my first React Component.</p>
             </div>
      }
})
export default App;


ReactDOM.render(<MyComponent />, document.getElementById('react'))