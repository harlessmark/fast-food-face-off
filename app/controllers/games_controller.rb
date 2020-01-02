class GamesController < ApplicationController

  def index
    render json: GameSerializer.new(Game.all)
  end

  def create
    Game.create(game_params)
  end

  private

  def game_params
    params.require(:game).permit(
      :score,
      :initials,
      :total_calories
    )
  end

end
