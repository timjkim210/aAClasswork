Rails.application.routes.draw do
  resource :session, only: [:new, :create, :destroy]
  resources :users
  resources :subs
  
  resources :posts, except: [:index]
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
