class Array

    def my_uniq
        uniq = []
        self.each do |ele|
            uniq << ele unless uniq.include?(ele)
        end
        uniq
    end

end