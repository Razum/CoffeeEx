describe "Movie Model spec", ->
  beforeEach (done)->
    require ['models/MovieModel'], (MovieModel)=>
      @MovieModel = MovieModel
      @movie = new @MovieModel
      done()
  it "movie should be instanceOf Movie", ->
    chai.expect(@movie).to.be.instanceof @MovieModel
    