class FoodsController < ApplicationController

  def index
    render json: FoodSerializer.new(Food.all)
  end

end
