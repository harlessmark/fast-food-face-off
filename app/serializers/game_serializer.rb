class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :initials
end
