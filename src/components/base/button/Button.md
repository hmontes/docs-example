Componente boton

```js
<Button primary>Boton</Button>
```

El boton puede tener distintos colores

```js
<Button.Group>
  <Button primary>Primary</Button>
  <Button secondary>Secondary</Button>
  <Button facebook>Facebook</Button>
  <Button google>Google</Button>
  <Button>Por defecto</Button>
</Button.Group>
```

También tiene tamaños distintos
```js
  <Button mid>Mid</Button>
```

E incluso puede abarcar todo el ancho con la propiedad wide
```js
  <div>
    <Button wide mid>Mid</Button>
    <br />
    <Button wide medium>Medium</Button>
  </div>
```

Puedes dividir los botones en dos o tres en forma lineal
```js
<div>
  <Button.Group>
    <Button orange className="half">Half</Button>
    <Button className="half">Half</Button>
  </Button.Group>
  
  <br />
  <Button.Group>
    <Button orange className="third">Third</Button>
    <Button secondary className="third">Third</Button>
    <Button secondary className="third">Third</Button>
  </Button.Group>
  
</div>
```

Puedes tener un boton cargando
```js
  <Button facebook isLoading>Facebook</Button>
```

Y puede tener un boton desactivado
```js
  <Button primary disabled>Hazme clic</Button>
```

Finalmente, puedes centrar el boton usando la propiedad center
```js
  <Button google center>Centrado</Button>
```