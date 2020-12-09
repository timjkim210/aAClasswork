class Pawn < Piece 
    def symbol
        "♟"
    end
    
    def moves

    end

    def at_start_row?
        if self.color == "white" && pos.first == 6
            return true
        elsif self.color == "black" && pos.first == 1
            return true
        end
        false
    end

    def forward_dir
        if self.color == "black"
            return 1
        else
            return -1
        end
    end
end