
module Phase1
  def my_min(list)
    list.each do |ele1|
      return ele1 if list.all? { |ele2| ele1 < ele2 }
    end
  end

  def largest_contiguous_subsum(list)
    sub_arrs = subarrays(list)
    sub_sums = sub_arrs.map {|sub_arr| sub_arr.sum}
    sub_sums.max
  end

  def subarrays(array)
    result = []
    (0...array.length).each do |idx1|
        (idx1+1...array.length).each do |idx2|
            result << array[idx1..idx2]
        end
    end
    result
  end
end

module Phase2
  def my_min(list)
    smallest = nil
    list.each do |ele1|
      if smallest == nil || ele1 < smallest
        smallest = ele1
      end
    end
    return smallest
  end

#[1, 2, 3, -10, 5, -2, -5]


  def largest_contiguous_subsum(list)
    idx = 0
    largest_sum = 0
    while idx < list.length

        largest_sum = sum if sum > largest_sum
        idx += 1
    end
    largest_sum
  end
end

