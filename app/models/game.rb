class Game < ApplicationRecord
  validates :initials,
    length: { minimum: 2, maximum: 3 },
    format: { with: /\A[a-zA-Z]+\z/ }
end
