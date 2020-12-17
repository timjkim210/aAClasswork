class User < ApplicationRecord
  validates :email, presence: true # making sure that email is not nil.
  validates :email, uniqueness: true # no two Accounts with the same email
end