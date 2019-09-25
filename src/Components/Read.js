
import React, { Component } from 'react'
import axios from 'axios'
import '../Css/Read.css';

class Read extends Component  {
    constructor(props) {
        super(props)
        this.state = {
            readingList: this.props,
            read_author_name: '',
            read_cover_i: '',
            read_id_goodreads: '',
            read_isbn: '',
            read_title:'',
            read_id:'' ,
            info:'invisible'
        }
   this.DeleteBook = this.DeleteBook.bind(this)
    }
    
   DeleteBook(){
    this.forceUpdate();
    console.log(this.state.readingList)
    this.setState({
        read_id:this.props._id,
        info:"visibleDIV",
    })
       setTimeout(() => {
           const URL = 
            'http://localhost:4000/reads/delete-read/'+this.state.read_id
        
           
       
    axios.delete(URL)
    .then((res) => {
        console.log('Book successfully deleted!')
    }).catch((error) => {
        console.log(error)
    })
       console.log( this.state.read_id)
       console.log(URL)
       this.setState({
        read_id:"",
        readingList: this.props,
    })
   
   /* setTimeout(() => {
    window.location.reload()

    },500)
    */

    }, 1000)
    
   }
   static getDerivedStateFromProps(props, state){

   }
render(props){
  let link = (this.props.goodreads === '404'
    ? console.log('Goodreads does not know of this title')
    :
    <div>
    <h2>Link:  </h2> <h3> <a href= { this.props.goodreads} target="blank">To Goodreads</a></h3>
    </div>)
  
  return (
      <div>
          
    <div className="bookstodisplayDiv">
        
      <img src={this.props.img} alt='cover' className="CovrImage"></img>
      <div className="textnextToImg">
        <h2>Title: </h2>
        <h3> { this.props.title}</h3>
        <br></br>
        <h2>Author: </h2>
        <h3> { this.props.author_name}</h3>
        <br></br>
        
        
{link}
<button onClick={this.DeleteBook} className="prettyButton">Delete from list</button>
      </div>

    </div>
    <div className={this.state.info}>
            <h1>Book succesfully deleted</h1>
        </div>
    </div>
  )
    }
}
export default Read