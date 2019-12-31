Rails.application.routes.draw do
  resources :restaurants
  resources :foods
  resources :games
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
