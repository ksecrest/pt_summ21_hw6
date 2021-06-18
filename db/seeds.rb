# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ratings = ['G','PG', 'PG-13', 'R']

10.times do
  theater = Theater.create(name: Faker::Company.name)
  20.times do
    theater.movies.create(title: Faker::Movie.title, duration: rand(1...2).to_s + " hours", rating: ratings.sample)
  end
end