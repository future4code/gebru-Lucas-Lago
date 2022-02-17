import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({completa}) => (completa ? 'line-through' : 'none')};
`

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`

class App extends React.Component {
    state = {
      tarefas: [
        {
          id: Date.now(),
          texto: 'Pegar o Gato',
          completa: false
        },
        {
          id: Date.now(),
          texto: 'Soltar o Gato',
          completa: true
        }
      ],
      inputValue: '',
      filtro: ''

    }

  componentDidUpdate(prevProps, prevState) {
    if(prevState.inputValue !== this.state.inputValue){
      localStorage.setItem('Texto', JSON.stringify(this.state.inputValue))
    }
  };

  componentDidMount() {
    const tarefaLS = JSON.parse(localStorage.getItem('Texto'))

    this.setState({
      inputValue: tarefaLS
    })
  };

  onChangeInput = (event) => {
    this.setState({inputValue: event.target.value})
  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }
    const novaListaTarefas = [...this.state.tarefas, novaTarefa]
    this.setState({ tarefas: novaListaTarefas})
  }

  selectTarefa = (id) => {
    const novaListaTarefasCompletas = this.state.tarefas.map((item) => {
      if (id === item.id){
        const tarefaCompleta = {
          ...item,
          completa: !item.curtida
        }
        return tarefaCompleta
      }else{
        return item
      }
    })
    this.setState({ tarefas: novaListaTarefasCompletas})
  }

  onChangeFilter = (event) => {
    this.setState({ filtro: event.target.value})
  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput}/>
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            )
          })}
        </TarefaList>
      </div>
    )
  }
}

export default App
