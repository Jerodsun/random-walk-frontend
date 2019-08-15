This App was started from CoreUI Free React Admin Template v2

`v2.6.0`


Currently deployed at https://jerodsun.xyz/random-walk-frontend 
There should be a way to attach onto a different CNAME...

Insertion and deletion cascading sequence:
- `routes.js` 
- `_nav.js` 
- `views/{folder}`


Todo list:
- [ ] Research setting up environment variables (?) to adjust between dev/stage/prod environments.
- [ ] Master insertion/cascade sequence
- [ ] Read through Axios and other docs imported in packages.
- [ ] Remove deprecated routes


NEW PLAN:
8/14/2019

In order to make this work after a lot of headaches, need to understand and work with the
_asynchronous_ nature of javascript execution. The root of the problem right now is in `axios`.
If `Promise` objects are not ready for execution, calling them outside the top-level module crashes the app. 
Therefore, they must all be instantiated in the same class -
but there is a particular design pattern such that there is no need for even that. So start from a very basic outline.

