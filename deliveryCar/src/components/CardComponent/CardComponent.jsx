/* eslint-disable react/prop-types */

const CardComponent = ({img, title, description}) => {
  return (
    <div>
        <img src={img} alt="Um belo carro laranja" />

        <h1>{title}</h1>
        <p>{description}</p>

        {/*Trocar para o botão do material ui depois */}
        <button>Learn more</button>
    </div>
  )
}

export default CardComponent