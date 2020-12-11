def first_anagram?(string1, string2)
    anagrams = all_anagrams(string1)
    anagrams.include?(string2)
end

def all_anagrams(string)
    return [string] if string == ''
    previous_anagrams = all_anagrams(string[1..-1])

    result = []
    #go through each of the previous anagrams
    previous_anagrams.each do |anagram|
        #push copies of each anagram with our letter inserted at each possible position
        (0..anagram.length).each do |slice_idx|        #represent slicing point
            result << anagram[0...slice_idx] + string[0] + anagram[slice_idx..-1]
        end
    end
    result
end




