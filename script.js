var movies = [
    {
      id: 1,
      title: 'Zielona Mila',
      desc: 'Dramat, rok 1999',
      src: 'http://1.fwcdn.pl/po/08/62/862/7517878.2.jpg'
    },
    {
      id: 2,
      title: 'Skazani na Shawshank',
      desc: 'Dramat, rok 1994',
      src: 'http://1.fwcdn.pl/po/10/48/1048/6925401.2.jpg'
    },
    {
      id: 3,
      title: 'Incepcja',
      desc: 'Thriller, rok 2010',
      src: 'http://1.fwcdn.pl/po/08/91/500891/7354571.2.jpg'
    },
    {
      id: 4,
      title: 'Chłopiec w pasiastej piżamie',
      desc: 'Dramat wojenny, rok 2008',
      src: 'http://1.fwcdn.pl/po/01/36/420136/7347382.2.jpg'
    },
    {
      id: 5,
      title: 'Piękny umysł',
      desc: 'Dramat, rok 2001',
      src: 'http://1.fwcdn.pl/po/18/64/31864/7521208.2.jpg'
    }
  ];


var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('li', {},
        React.createElement(MovieTitle, {title: this.props.movie.title}),
        React.createElement(MovieDesc, {desc: this.props.movie.desc}),
        React.createElement(MovieSrc, {src: this.props.movie.src})
      )
    )
  }
});


var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('h2', {}, this.props.title)
      )
  },
});

var MovieDesc = React.createClass({
  propTypes: {
    desc: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
      React.createElement('p', {}, this.props.desc)
      )
  },
});


var MovieSrc = React.createClass({
  propTypes: {
    src: React.PropTypes.string.isRequired,
  },

  render: function() {
    return (
        React.createElement('img', {src: this.props.src})
      )
  },
});


var MovieList = React.createClass({
  propTypes: {
    movies: React.PropTypes.array.isRequired,
  },

  render: function() {
    var MovieElements = this.props.movies.map(function(movie) {
      return React.createElement(Movie, {
              key: movie.id,
              movie: movie
          });
      });
      return React.createElement('ul', {}, MovieElements);
  }
});


var element = React.createElement(MovieList, {movies: movies});

ReactDOM.render(element, document.getElementById('app'));


// ćwiczenie galeria
/*
var GalleryItem = React.createClass({
  propTypes: {
    image: React.PropTypes.object.isRequired,
  },

  render: function() {
    return (
      React.createElement('div', {},
       React.createElement('h2', {}, this.props.image.name),
       React.createElement('img', {src: this.props.image.src})
      )
    )
  },
})

var image = {
    name: 'Kotek',
    src: 'http://imgur.com/n8OYCzR.png'
};


var element = React.createElement(GalleryItem, {image: image});

ReactDOM.render(element, document.getElementById('app'));
*/