const opacity = `
  .opacity-enter {
    opacity: 0.01;
  }

  .opacity-enter.opacity-enter-active {
    opacity: 0.8;
    transition: opacity 300ms ease-in;
  }

  .opacity-exit {
    opacity: 0.8;
  }

  .opacity-exit.opacity-exit-active {
    opacity: 0.01;
    transition: opacity 300ms ease-in;
  }
`

export default opacity