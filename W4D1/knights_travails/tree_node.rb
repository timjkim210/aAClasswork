class PolyTreeNode

    attr_reader :pos

    def initialize(pos)
        @pos = pos
        @parent = nil
        @children = []
    end

    def build_move_tree
        self.new_move_positions
    end





end