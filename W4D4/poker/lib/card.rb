class Card
    attr_reader :symbol, :number
    SYMBOLS = [:heart, :clover, :spade, :diamond]

    NUMBERS = ['A', 'J', 'Q', 'K'] + ('2'..'10').to_a

    def initialize(symbol, number)
        @symbol = symbol
        @number = number
    end


end