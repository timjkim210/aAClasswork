# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Todo.create(title: "hello", body: "world", done: false)
Todo.create(title: "Wash Dishes", body: "anything", done: false)
Todo.create(title: "Do Laundry", body: "anything", done: true)