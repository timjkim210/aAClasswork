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
            expect(array.)
        end


    end
end