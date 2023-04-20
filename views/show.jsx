const React = require('react')
const Default = require('./layouts/deafult')

function Show ({bread}) {
  //console.log(bread.name)
    return (
      <Default>
        <h2>Show Page</h2>
        <li><a href="/breads">Go Home</a></li>
        <h3>{bread.name}</h3>
        <p>
            and it  
            {
                bread.hasGluten
                ? <span> does </span>
                : <span> does NOT </span>
            }
            have gluten.
        </p>
        <img src={bread.image} alt={bread.name}/>
      </Default>
    )
}

module.exports = Show
