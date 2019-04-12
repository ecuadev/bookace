exports = function(criteria){
  const http = context.services.get('http');
  const host = 'www.googleapis.com';
  const path = `/books/v1/volumes`;
  const query = { q: [criteria] };

  // TODO: parse the body
  // http.get({...}).then(response => {
  //    const body = EJSON.parse(response.body.text()); 
  //    // TODO: send results to mongodb
  // });
  
  return http.get({
    scheme: 'https',
    host,
    path,
    query
  });
};