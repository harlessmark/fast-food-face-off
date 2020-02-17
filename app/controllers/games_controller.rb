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
      render json: { message: "Accepted initials." },
      status: 202
    else
      render json: { message: "Didn't accept initials" },
      status: 406
    end
  end

  private

  def game_params
    params.require(:game).permit(
      :score,
      :initials,
      :id
    )
  end
end
