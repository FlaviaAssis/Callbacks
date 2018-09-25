module.exports = function(callback){
  console.log('Executando função síncrona');
  setTimeout(() => {
    callback('Callback executado', 123)
  },5000)
}
