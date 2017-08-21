console.log('The lazy module has loaded! See the network tab in dev tools...');

export default () => {
  console.log('this is printed after lazy loading the module');
}