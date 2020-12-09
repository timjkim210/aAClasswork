class Board
    def initialize
        @rows = Array.new(8) {Array.new(8)}
        @null_piece
    end


    def [](pos)
        row, col = pos
        @rows[row][col]
    end

    def []=(pos, value)
        row, col = pos
        @rows[row][col] = value
    end

    def add_piece(piece , pos)
        self[pos] = piece
    end

    def move_piece(start_pos, end_pos)
        self[end_pos] = self[start_pos]
        self[start_pos] = nil
    end
end