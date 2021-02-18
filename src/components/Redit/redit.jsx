import React, {useState,useEffect} from 'react'
import axios from 'axios'
import {Card } from 'react-bootstrap'



 function Redit() {
    const [posts,setPosts ] = useState([]);
   const [click,setClick] = useState()
   
   
   // // function change () {
   // //         setValue (value+1)
        
   // // }
   
    useEffect(() => {
      alert("Iam working ")
   //   // setValue (value +1)
      axios.get(`https://www.reddit.com/r/reactjs.json`)
     .then (res => {
       const newPosts = res.data.data.children
       .map(obj => obj.data)
      setPosts(newPosts)
      });
    },[click]);
      return (
     
<div>

{/* <button onClick={ ()=>setClick(!click)  }>Reload</button> */}
<ul>
  {posts.map(post => (
    <div className="checks" key={post.id} style={{marginTop:"2%"}}>
    <Card className="card">
        <Card.Body >
            <Card.Title>{post.title}</Card.Title>
            <Card.Text>{post.selftext}</Card.Text>
        </Card.Body>
    </Card>
</div>
  

    
  ))}
  
</ul>
</div>
      )}
   
    export default Redit;