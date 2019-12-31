Rails.application.routes.draw do
  get '/restaurants', to: 'restaurants#index'
  get '/foods', to: 'foods#index'

  resources :restaurants
  resources :foods
  resources :games
end
