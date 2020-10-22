import React from 'react';

class EstadoFavorito extends React.Component {
  render () {
    const { handleEvent, value } = this.props

    let errorMsg = undefined;
    let errorSignal = false;

    if(value.length > 20) {
      errorMsg = "Texto deve ter menos que 20 caracteres"
      errorSignal = true;
    }

    return (
    <div>
      <label>
        Diga qual o seu Estado favorito! De React ou do Brasil, você decide! =) (máximo 20 caracteres)
          <textarea 
          name="estadoFavorito"
          value={value}
          onChange={handleEvent}
          />
      </label>
      <p>{errorMsg ? errorMsg : ""}</p>
    </div>
    )
  }
}

export default EstadoFavorito;