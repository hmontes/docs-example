Ejemplo de Overlay

```js
initialState = {open: false};

<div>
  <Overlay open={state.open} />
  <Button onClick={() => {
    setState({open: true})
    setTimeout(() => {
      setState({open: false})
    }, 2000)
  }}>
    Ver Overlay
  </Button>
</div>
```