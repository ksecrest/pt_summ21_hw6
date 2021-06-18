class Api::TheatersController < ApplicationController
  beffore_action :set_theater, only: [:show, :update, :destroy]

  def index
    render json: Theater.all
  end

  def show
    render json: @theater
  end

  def create
    @new_theater = Theater.new(theater_params)
    if @new_theater.save
      render json: @new_theater
    else
      render json: {errors: @new_theater.errors}, status: 422
    end
  end

  def update
    if @theater.update(theater_params)
      render json: @theater
    else
      render json: {errors: @theater.errors}, status: 422
    end
  end

  def destroy
    @theater.destroy
    render json: {message: 'Theater deleted'}
  end

  private
  def theater_params
    params.require(:theater).permit(:name)
  end

  def set_theater
    @theater = Theater.find(params[:id])
  end
end
