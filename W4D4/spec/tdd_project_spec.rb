require 'tdd_project'

describe Array do
    describe "#my_uniq" do
        array = [1, 2, 1, 3, 3]
        it 'removes duplicates' do
            expect(array.my_uniq).to eq([1, 2, 3])
        end

    end
    describe '#two_sum' do
        array = [-1, 0, 2, -2, 1]
        it 'finds all pairs of positions where elements sum to zero' do
            expect(array.two_sum).to eq([[0, 4], [2, 3]])
        end


    end
end

describe "my_transpose(arr)" do
    rows = [ [0, 1, 2],
             [3, 4, 5],
             [6, 7, 8]]
    it 'converts rows to columns'do
        expect(my_transpose(rows)).to eq([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
    end
end

describe "stock_picker(arr)" do
    prices = [5, 675, 9999, 30, 67, 8999]
    it 'finds the most profitable pair of days' do
        expect(stock_picker(prices)).to eq([0,2])
    end
end

# describe "towers_of_hanoi(arr)" do
#     arr = [[1,2,3],[],[]]
#     # it 'checks the starting array' do
#     #     expect(arr).to eq([[1,2,3],[],[]])
#     # end


# end

describe TowersOfHanoi do 
    describe 'play' do
    end

    desribe 'move' do 
    end

    describe 'won?'do
    end
end