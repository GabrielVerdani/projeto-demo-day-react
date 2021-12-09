import IntegrantesItem from "./IntegrantesItem"
import ScrollContainer from "react-indiana-drag-scroll"

export default function IntegrantesList(props) {

  return (
    <div>
      <ScrollContainer className="product-list">
        {props.integrantes.map(integrante => {
          return (
            <div key={integrante.id}>
              <IntegrantesItem
                id={integrante.id}
                image={integrante.foto_produto}
                title={integrante.nome}
                funcao={integrante.funcao} 
                github={integrante.github}
                />
            </div>
          )
        })}
      </ScrollContainer>
    </div >
  )
}
