module Slideable
    HORIZONTAL_DIRS = [[-1,0],[1,0],[0,1],[0,-1]]

    DIAGONAL_DIRS = [[1,1], [1, -1], [-1,-1], [-1,1]]

    def horizontal_dirs
        HORIZONTAL_DIRS
    end

    def diagonal_dirs
        DIAGONAL_DIRS
    end

    def moves
        # move_dirs.each do |dir|
        # call grow_unblocked_moves_in_dir on each dir
        # all possible moves for each dirs.(green spot on chess game)
        all_moves = []
        move_dirs.each do |dir| # dir = [0,1]
            dir = x, y 
            move = grow_unblocked_moves_in_dir(x ,y)
            all_moves += move

        end
        all_moves

    end

    def grow_unblocked_moves_in_dir(dx, dy) 
        moves = []
        x, y = pos # start pos [0,0]
                    # dx, dy [1, 1]
        while true
            current_x = x + dx #1
            current_y = y + dy #1
            current_pos = [current_x,current_y] #[1,1]
            if board.empty?(current_pos) # ?????
                moves << current_pos
            elsif current_pos.color != self.color #????
                moves << current_pos
                break
            end
        end
        return moves
    end
    
    def move_dirs
        # will be overwrriten by subclass
    end

end