import React, {Component} from 'react'
import './style.css'

class Todolist extends Component {
  constructor(props) {
    super(props)
    this.state = {
      list: [],
    }

    this.input = React.createRef()
  }

  addData = () => {
    const value = this.input.current.value
    if (!value) {
      return
    }
    const tempList = [...this.state.list]
    tempList.push(value.trim())
    console.log(tempList)
    this.setState({list: tempList})
    this.input.current.value = ''
  }

  removeData = (key) => {
    console.log('removeData', key)
    const tempList = [...this.state.list]
    tempList.splice(key, 1)    
    this.setState({list: tempList})
  }

  render() {
    return (
      <div style={{padding: '20px'}}>
        <h2>React Todolist demo</h2>
        <input ref={this.input}/>
        <button onClick={this.addData}>Add</button>
        <hr/>
        <ul className='list'>
          {
            this.state.list.map((value, key) => {
              // console.log(key)
              return (
                <li key={key}>
                  {value} --- 
                  <button onClick={() => this.removeData(key)}>
                    del
                  </button>
                </li>
              )              
            })
          }          
        </ul>
      </div>
    )
  }
}

export default Todolist