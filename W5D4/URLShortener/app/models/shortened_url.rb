# create_table "shortened_urls", force: :cascade do |t|
#     t.string "short_url", null: false
#     t.string "long_url", null: false
#     t.integer "user_id"
#     t.index ["short_url"], name: "index_shortened_urls_on_short_url", unique: true


class ShortenedUrl < ApplicationRecord
    validates :short_url, :long_url, presence: true
    
    belongs_to :user,
        foreign_key: :user_id,
        primary_key: :id,
        class_name: :User

end

