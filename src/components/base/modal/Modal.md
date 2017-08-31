Modal básico y con titulo
```js
initialState = { basic: false, title: false };

<div>
  <Overlay open={state.basic || state.title}/>

  <Modal open={state.basic} closeBtn={() => setState({basic: false})}>
    <p>Modal Básico</p>
  </Modal>
  
  <Modal open={state.title} title="Soy un titulo" closeBtn={() => setState({title: false})}>
    <p>Modal con titulo</p>
  </Modal>

  <Button.Group>
    <Button orange onClick={() => setState({basic: true})}>Modal Básico</Button>
    
    <Button orange onClick={() => setState({title: true})}>Modal con titulo</Button>
  </Button.Group>
</div>
```

OJO!! Modal funciona como container. Vale decir, se llama una sola vez y en el hijo se coloca el contenido.