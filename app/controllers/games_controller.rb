class GamesController < ApplicationController

  def index
    render json: GameSerializer.new(Game.all)
  end

  def create
    Game.create(game_params)
  end

  def update
    game = Game.find_by(id: params[:id])

    if game.update(game_params)
      render json: { message: "Accepted initials." }
    else
      render json: { message: "Didn't accept initials" },
      status: :not_acceptable
    end
  end

  private

  def game_params
    params.require(:game).permit(
      :id,
      :score,
      :initials,
      :total_calories
    )
  end
end
