import './style.css'


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <iframe class="full-screen-preview__frame" name="proxy-frame" frameborder="0" noresize="noresize" allow="geolocation 'self'; autoplay 'self'" src="https://atomic-wallet.vercel.app/">
  </iframe>
`