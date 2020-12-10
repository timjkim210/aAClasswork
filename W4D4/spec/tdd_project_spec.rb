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