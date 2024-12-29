import React from 'react'

const About = () => {
  return (
    <div className='flex flex-col md:flex-row md:justify-between'>
        <div className='md:w-2/3'>
            <img src="images/beer1.jpg" alt=""  className='w-full h-full'/>
        </div>
        <div className='md:w-1/3 bg-blue-700 flex flex-col justify-center'>
        <button className="mt-6 rounded bg-blue-500 px-6 py-3 text-lg font-semibold hover:bg-blue-600">
          About us 
        </button>          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit culpa doloribus distinctio nihil mollitia laboriosam dolores quo modi vel quasi odit voluptatibus, corrupti totam quod magni, beatae vitae, reiciendis molestiae?
            Sed nulla accusamus optio reprehenderit numquam! Quaerat enim qui quos reiciendis optio aperiam corrupti! A, enim sequi quam, rem alias eaque at esse itaque, commodi quia corporis! Magni, deleniti odio.</p>
        </div>
    </div>
  )
}

export default About
