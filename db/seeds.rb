10.times do
  Item.create(title: Faker::RickAndMorty.quote)
end
