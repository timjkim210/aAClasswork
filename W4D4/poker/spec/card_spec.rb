require 'card'
describe Card do
    describe '#initialize' do
        SYMBOLS = [:heart, :clover, :spade, :diamond]
        NUMBERS = ['A', 'J', 'Q', 'K'] + ('2'..'10').to_a
        symbol = SYMBOLS.sample
        number = NUMBERS.sample
        card = Card.new(symbol, number)
        it 'sets symbol and number to the card' do
            expect(card.symbol).to eq(symbol)
            expect(card.number).to eq(number)
        end

        it 'check if card is an instance of the Card class' do
            expect(card.is_a?(Card)).to be true
        end
    end




end