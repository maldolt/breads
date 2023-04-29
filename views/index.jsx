
const React = require('react')
const Default = require('./layouts/default')

function Index ({breads, title})  {
    return (
        <Default title={title}>
        <h2>Index Page</h2>
        {/* <p>I have {breads[0].name} bread!</p> */}
        {/* This is a JSX comment. */}
        <ul>
          {
            breads.map((bread, index)=> {
              return (
                <li key={index}>
                    <a href={`/breads/${bread.id}`}>
                {bread.name}
                </a>
              </li>)
            }) 
          }
        </ul>
        <div className="newButton">
        <a href="/breads/new"><button>Add a new bread</button></a>
        </div>
        <div className="backButton">
        <a href="/breads"><button>Go back to the index</button></a>
        </div>
        </Default>
    )
}

module.exports = Index