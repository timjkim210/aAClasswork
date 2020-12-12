def bad_two_sum?(arr, target)
    (0...arr.length).each do |idx1|
        (idx1+1...arr.length).each do |idx2|
            return true if arr[idx1] + arr[idx2] == target
        end
    end
    false
end



