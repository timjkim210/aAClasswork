require "action_view"
class Cat < ApplicationRecord
    include ActionView::Helpers::DateHelper 

    def age
        time_ago_in_words(birth_date)
    end
end
