class Theater < ApplicationRecord
  has_many :movies, dependent: :destroy
end
