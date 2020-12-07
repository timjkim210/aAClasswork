require_relative 'tree_node.rb'
class KnightPathFinder
    def initialize(start_pos)
        @root_node = PolyTreeNode.new(start_pos)
        @considered_positions = [start_pos]
    end

    def self.valid_moves(pos) #[3, 3], 
        valid = []
        dirs = [[2, 1], [1, 2],[-1, 2],[-2, 1],[-2, -1], [-1, -2],[1, -2], [2, -1]]
        dirs.each do |dir|
            row, col = pos[0]+dir[0], pos[1]+dir[1]
            if (row <= 7 && row >= 0) && (col <= 7 && col >= 0)
                valid << [row, col]
            end
        end
        valid
    end

    def new_move_positions(pos)
        valid_moves = KnightPathFinder.valid_moves(pos)
        possible_moves = []
        valid_moves.each do |move|
            if !@considered_positions.include?(move)
                @considered_positions << move
                possible_moves << move
            end
        end
        possible_moves
    end

    









end

new_thing = KnightPathFinder.new([0,0])
p new_thing.new_move_positions([0, 0])
p new_thing.new_move_positions([0, 0])

