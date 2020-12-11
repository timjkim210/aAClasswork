
module Phase1
  def my_min(list)
    list.each do |ele1|
      return ele1 if list.all? { |ele2| ele1 < ele2 }
    end
  end

  def largest_contiguous_subsum(list)
  end

  def subarrays(array)
    (0...array.length).each do 
    end
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

  def largest_contiguous_subsum(list)
  end
end

