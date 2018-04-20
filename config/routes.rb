Rails.application.routes.draw do
  root to: 'items#index'

  namespace :api, constraints: { format: 'json' } do
    resources :items
  end

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
