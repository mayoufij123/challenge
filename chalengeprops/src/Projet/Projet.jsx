import React from 'react'

const Projet = ({p}) => {
    console.log('this is my props',p)
  return (
    <div>
       
         <div class="project-card">
          <img src={p.img} />
          <h3>{p.titre}</h3>
          <p>
            {p.description}
          </p>
        
        </div>
        </div>
  )
}

export default Projet
