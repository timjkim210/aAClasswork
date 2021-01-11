class Sub < ApplicationRecord
    belongs_to :moderator,
        foreign_key: :mod_id,
        class_name: :User
end
