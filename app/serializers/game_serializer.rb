class GameSerializer
  include FastJsonapi::ObjectSerializer
  attributes :score, :initials, :total_calories
end
