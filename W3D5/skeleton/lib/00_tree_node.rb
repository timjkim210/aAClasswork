class PolyTreeNode
    attr_accessor :value, :parent, :children

    def initialize(value)
        @value = value
        @parent = nil
        @children = []
    end

    def parent=(node)
        
        if node != nil
            @parent = node
            class PolyTreeNode
                attr_accessor :value, :parent, :children
            
                def initialize(value)
                    @value = value
                    @parent = nil
                    @children = []
                end
            
                def parent=(node)
                    if node != nil
                        @parent = node
                        @children.shift
                        node.children << self unless node.children.include?(self)
                    else
                        @parent = node
                    end
                end
            end
            node.children << self unless node.children.include?(self)
        else
            @parent = node
        end
    end
end

