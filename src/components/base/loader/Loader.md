El loader permite colocar un icono que avisa la carga de algo. Puede ser normal o blanco (con la propiedad white) y también tener distintos tamaños (con la propiedad size)
```js
<div style={{backgroundColor: 'grey'}}>
  <Loader />
  <br /><br />
  <Loader white/>
  <br /><br />
  <Loader white size={3} />
</div>
```

Si le agregamos la propiedad inline el Spiner se verá al medio
```js
<div>
  <Loader inline />
</div>
```
