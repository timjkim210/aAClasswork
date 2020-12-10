class Array

    def my_uniq
        uniq = []
        self.each do |ele|
            uniq << ele unless uniq.include?(ele)
        end
        uniq
    end

    def two_sum
        arr = []
        self.each_with_index do |ele, idx1|
            self.each_with_index do |ele2, idx2|
                arr << [idx1, idx2] if idx2 > idx1 && ele + ele2 == 0
            end
        end
        arr
    end

end

def my_transpose(arr)
    result = []
    (0...arr.length).each do |idx|
        sub_arr = []
        (0...arr.length).each do |idx2|
        sub_arr << arr[idx2][idx]
        end
        result << sub_arr
    end
    result
end

def stock_picker(arr)
    max_profit = 0
    pair = []
    arr.each_with_index do |ele, idx1|
        arr.each_with_index do |ele2, idx2|
            if idx2 > idx1 && ele2 - ele > max_profit
                max_profit = ele2 - ele
                pair = [idx1, idx2]
            end
        end
    end
    pair
end

class TowersOfHanoi
    attr_reader :towers
    
    def initialize
        @towers = [[1,2,3],[],[]]
    end

    def play
        until won?
            puts 'Which disc would you like to move?'
            disc = gets.chomp.to_i
            if top?(disc)
                puts 'Where would you like to move it?'
                pos = gets.chomp.to_i
                move(disc, pos)
            else
                puts 'Cant move that disc, please choose another disc'
            end
        end
    end

    def top?(disc)
        @towers.each do |row|
            if row.first == disc
                return true
            end
        end
        false
    end

    def move(disc, pos)
        @towers.each do |row|
            if row.include?(disc)
                top_disc = row.shift
            end
        end
        @towers[pos] << top_disc
    end

    def won?
        @towers.any? {|tower| tower == [1,2,3]}
    end
end