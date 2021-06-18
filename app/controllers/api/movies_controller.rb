class Api::MoviesController < ApplicationController
  before_action :set_theater
  before_action :set_movie, only: [:show, :update, :destroy]

  def index
    render json: @theater.movies.all
  end

  def show
    render json: @movie
  end

  def create
    @new_movie = Movie.new(movie_params)
    if @new_movie.save
      render json: @new_movie
    else
      render json: {errors: @new_movie.errors}, status: 422
    end
  end

  def update
    if @movie.update(movie_params)
      render json: @movie
    else
      render json: {errors: @movie.errors}, status: 422
    end
  end

  def destroy
    @movie.destroy
    render json: {message: 'Movie deleted'}
  end

  private
  def movie_params
    params.require(:movie).permit(:title, :duration, :rating)
  end

  def set_movie
    @movie = @theater.movies.find(params[:id])
  end

  def set_theater
    @theater = Theater.find(params[:theater_id])
  end
end
