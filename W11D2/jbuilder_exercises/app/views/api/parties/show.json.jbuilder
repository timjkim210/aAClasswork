json.extract! @party, :name

json.guests do
    json.array! @party.guests.each do |guest|
            json.extract! guest, :name
            json.gifts do
                json.array! guest.gifts.each do |gift|
                    json.extract! gift, :title
                end
            end
    end
end
