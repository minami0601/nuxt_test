export default function() {
  console.log('moduleのてすと')

  this.nuxt.hook('ready', async nuxt => {
    console.log('Nuxt is ready')
  })
}
