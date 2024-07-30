//import { charmander } from './bases/03-classes'
//import { charmander } from './bases/05-decorators.ts'
import { charmander } from './bases/06-decorators2.ts'
import './style.css'


//como es vitee se corre con "npm run dev"
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Hello ${charmander.name}!!!</h1>
  <a href="https://vitejs.dev/guide/features.html"></a>
   `
