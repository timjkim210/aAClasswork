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