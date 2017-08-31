Formulario hecho para el tema.
Input común y corriente
```js
<Form>
  <Form.Input placeholder="Ingresa tu nombre" />
  <br />
  <Form.Input email placeholder="ingresa tu email" />
</Form>
```

Input con bordes redondeados
```js
<Form.Input rounded placeholder="Ingresa tu apellido" />
```

Input invalido
```js
<Form.Input invalid placeholder="Ingresa tus datos" />
```

Textarea
```js
<Form.Textarea placeholder="Cuentanos de ti" />
```

Select
```js
  <Form>
    <Form.Select>
      <option value="0">Elige una opción</option>
      <option value="1">React</option>
      <option value="2">Angular</option>
    </Form.Select>
  </Form>
```

Un label común y corriente
```js
<Form.Label>Probando</Form.Label>
```

Cuando incluyo un label antes de un input, se debe incluir la propiedad input.
```js
<Form>
  <Form.Label input>Nickname</Form.Label>
  <Form.Input />
</Form>
```

Si el campo es requerido, agregar además la propiedad required
```js
<Form>
  <Form.Label input required>Primer nombre</Form.Label>
  <Form.Input />
</Form>
```

Puedes usar Radio. ideal para dar diversas opciones
```js
<Form>
  <Form.Radio name="gender" value="Hombre" defaultChecked>Hombre</Form.Radio>
  <Form.Radio name="gender" value="Mujer">Mujer</Form.Radio>
</Form>

```

También puedes usar checkbox
```js
<Form>
  <Form.Checkbox name="remember">Recordar usuario y contraseña</Form.Checkbox>
</Form>
```

Puedes agrupar de a dos o tres formularios facilmente

```js
  <Form>
    <Form.Group>
      <Form.Item>
        <Form.Label input>Nombre</Form.Label>
        <Form.Input placeholder="Inserta tu nombre..." />
      </Form.Item>
      <Form.Item>
        <Form.Label input>Apellido</Form.Label>
        <Form.Input placeholder="Inserta tu apellido..." />
      </Form.Item>
    </Form.Group>
    <br />
    <Form.Group>
      <Form.Item>
        <Form.Label input>Día</Form.Label>
        <Form.Input />
      </Form.Item>
      <Form.Item>
        <Form.Label input>Mes</Form.Label>
        <Form.Input />
      </Form.Item>
      <Form.Item>
        <Form.Label input>Año</Form.Label>
        <Form.Input />
      </Form.Item>
    </Form.Group>

  </Form>
```

* Falta implementar Datepicker