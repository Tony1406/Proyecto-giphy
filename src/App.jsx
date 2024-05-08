import { useEffect, useState } from 'react'
import './App.css'

function App() {

  //fetch search

  const [imageUrl, setImageUrl] = useState("");

  const busqueda = () => {
    fetch("https://api.giphy.com/v1/gifs/search?api_key=5D13jEWfIbwIZaPt1Ys4SKGR00pOZtgg&q=naruto&limit=10")
      .then((Response) => {
        return Response.json()
      })
      .then((json) => {
        console.log(json)
        setImageUrl(json.data[1].images.original.url)
      })
      .catch((error) => {
        console.log(error, "error search");
      })
  }

  useEffect(() => {
    busqueda()
  }, [])

  return (
    <>
      <div className='container pt-5'>
        <h3 className='mb-4 text-light'>
          GifExpertApp
        </h3>
        <form>
          <div className="mb-3">
            <input type="text" className="form-control" id="exampleInputText" aria-describedby="emailHelp" placeholder="Busca tu Gif" />
          </div>
        </form>        
        <h2 className='pt-4 mb-5 text-light'>
          Resultados
        </h2>
        <div className='d-flex'>
          <div className="card tamañocarta">
            {imageUrl == "" ? null :
              <img src={imageUrl} className="card-img-top" alt="LOL" />
            }
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
            </div>
          </div>
          <div className="card tamañocarta">
            {imageUrl == "" ? null :
              <img src={imageUrl} className="card-img-top" alt="LOL" />
            }
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
            </div>
          </div>
          <div className="card tamañocarta">
            {imageUrl == "" ? null :
              <img src={imageUrl} className="card-img-top" alt="LOL" />
            }
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
            </div>
          </div>
          <div className="card tamañocarta">
            {imageUrl == "" ? null :
              <img src={imageUrl} className="card-img-top" alt="LOL" />
            }
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
            </div>
          </div>
          <div className="card tamañocarta">
            {imageUrl == "" ? null :
              <img src={imageUrl} className="card-img-top" alt="LOL" />
            }
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
            </div>
          </div>
          <div className="card tamañocarta">
            {imageUrl == "" ? null :
              <img src={imageUrl} className="card-img-top" alt="LOL" />
            }
            <div className="card-body">
              <h5 className="card-title text-center">Card title</h5>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
