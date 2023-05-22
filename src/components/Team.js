import React from 'react'
import { Link } from 'react-router-dom'
const Team = () => {
  return (
    <div className='about'>
    <header className='header'>
      <h4>this is a about page</h4>
    </header>
    <div className='teamjava'>


<Link to={'/Team'}> <h2>Go TO Team</h2></Link>
<Link to={'/Java'}><h2>Java</h2></Link>
</div>
    <div>
    <article className='artical2'>
        
        <h2 className='h2headingtag' >Method Overriding in Java</h2>
        <p>Understanding the problem without method overriding</p>
        <p>Can we override the static method</p>
        <p>Method overloading vs. method overriding,</p>
        <p>If subclass (child class) has the same method as declared in the parent class, it is known as method overriding in Java.</p>

        <p>In other words, If a subclass provides the specific implementation of the method that has been declared by one of its parent class,
             it is known as method overriding.</p>
<div className='articaldiv' >
        <h2 className='h2headingtag'>Usage of Java Method Overriding</h2>
        <p>Method overriding is used to provide the specific implementation of a method which is already provided by its superclass.</p>
        <p>Method overriding is used for runtime polymorphism</p>
        <p>Rules for Java Method Overriding</p>
        <p>The method must have the same name as in the parent class</p>
        <p>The method must have the same parameter as in the parent class.</p>
        <p>There must be an IS-A relationship (inheritance) </p></div><br></br>

       



      

        
        
        </article>
        </div>
       <div>
       <img src="https://i1.wp.com/beautifulplacestovisit.com/wp-content/uploads/2011/05/Tour_eiffel_paris-eiffel_tower.jpg" alt="Cinque Terre" width="1000" height="300"></img>
       <button> <Link to={'/contact'}> <h2>spring boot</h2></Link></button>
       </div></div>
  )
}

export default Team